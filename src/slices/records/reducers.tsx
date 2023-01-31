import { createAsyncThunk } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../app/firebaseConfig";
import { RecordTable } from "../../types/data";

export const getAllRecords = createAsyncThunk("records/getAllRecords", async () => {
	const querySnapshot = await getDocs(collection(db, "records"));
	const results = querySnapshot.docs.map((doc) => {
		return { id: doc.id, ...doc.data() } as RecordTable;
	});

	return results;
});
