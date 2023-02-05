import { createAsyncThunk } from "@reduxjs/toolkit";
import { addDoc, collection, getDocs, Timestamp, doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../../app/firebaseConfig";
import { ContractTable } from "../../types/data";

const processContractData = (data: any, id: string) => {
	return {
		...data,
		key: id,
		dateCreated: data.dateCreated.toDate(),
		dateExpired: data.dateExpired.toDate(),
	} as ContractTable;
};

export const getAllContracts = createAsyncThunk("contracts/getAllContracts", async () => {
	const querySnapshot = await getDocs(collection(db, "contracts"));
	const results = querySnapshot.docs.map((doc) => {
		const rawData = doc.data();
		return processContractData(rawData, doc.id);
	});

	return results;
});

export const addContract = createAsyncThunk(
	"contracts/addContract",
	async (data: ContractTable) => {
		const { key, ...document } = data;
		const docRef = await addDoc(collection(db, "contracts"), {
			...document,
			dateCreated: Timestamp.fromDate(document.dateCreated),
			dateExpired: Timestamp.fromDate(document.dateExpired),
		});
		return { ...document, key: docRef.id } as ContractTable;
	}
);

export const getContract = createAsyncThunk("contracts/getContract", async (id: string) => {
	const docRef = doc(db, "contracts", id);
	const docSnapshot = await getDoc(docRef);
	if (docSnapshot.exists()) {
		return processContractData(docSnapshot.data(), id);
	} else {
		return null;
	}
});

export const updateContract = createAsyncThunk(
	"contracts/updateContract",
	async (data: ContractTable) => {
		const { key, ...document } = data;
		const docRef = doc(db, "contracts", key);
		await setDoc(docRef, {
			...document,
			dateCreated: Timestamp.fromDate(document.dateCreated),
			dateExpired: Timestamp.fromDate(document.dateExpired),
		});

		return data;
	}
);
