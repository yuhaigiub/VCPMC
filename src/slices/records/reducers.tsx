import { createAsyncThunk } from "@reduxjs/toolkit";
import { addDoc, collection, doc, getDocs, query, where } from "firebase/firestore";
import { db } from "../../app/firebaseConfig";
import { RecordTable } from "../../types/data";

export const getAllRecords = createAsyncThunk("records/getAllRecords", async () => {
	const querySnapshot = await getDocs(collection(db, "records"));
	const results = querySnapshot.docs.map((doc) => {
		return { key: doc.id, ...doc.data() } as RecordTable;
	});

	return results;
});

export const addRecord = createAsyncThunk("records/addRecord", async (data: RecordTable) => {
	const { key, ...document } = data;
	const docRef = await addDoc(collection(db, "records"), {
		...document,
	});
	return { ...document, key: docRef.id } as RecordTable;
});

export const getRecordfromContractId = createAsyncThunk(
	"records/getRecord",
	async (contractId: string) => {
		const q = query(collection(db, "records"), where("contractId", "==", contractId));
		const querySnapshot = await getDocs(q);
		if (querySnapshot.docs.length !== 0) {
			return {
				...querySnapshot.docs[0].data(),
				key: querySnapshot.docs[0].id,
			} as RecordTable;
		} else {
			return null;
		}
	}
);
