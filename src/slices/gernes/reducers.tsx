import { createAsyncThunk } from "@reduxjs/toolkit";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../../app/firebaseConfig";
import { GerneTable } from "../../types/data";

export const getAllGernes = createAsyncThunk("gernes/getAllGernes", async () => {
	const querySnapshot = await getDocs(collection(db, "gernes"));
	const results = querySnapshot.docs.map((doc) => {
		return { ...doc.data(), key: doc.id } as GerneTable;
	});
	return results;
});

export const addGerne = createAsyncThunk("gernes/addGerne", async (data: GerneTable) => {
	const { key, ...document } = data;
	const docRef = await addDoc(collection(db, "gernes"), {
		...document,
	});
	return { ...document, key: docRef.id } as GerneTable;
});
