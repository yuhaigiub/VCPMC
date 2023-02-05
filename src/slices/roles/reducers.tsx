import { createAsyncThunk } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../app/firebaseConfig";
import { RoleTable } from "../../types/data";

export const getAllRoles = createAsyncThunk("roles/getAllRoles", async () => {
	const querySnapshot = await getDocs(collection(db, "roles"));
	const results = querySnapshot.docs.map((doc) => {
		return { key: doc.id, ...doc.data() } as RoleTable;
	});

	return results;
});