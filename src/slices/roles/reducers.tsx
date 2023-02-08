import { createAsyncThunk } from "@reduxjs/toolkit";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "../../app/firebaseConfig";
import { RoleTable } from "../../types/data";

export const getAllRoles = createAsyncThunk("roles/getAllRoles", async () => {
	const querySnapshot = await getDocs(collection(db, "roles"));
	const results = querySnapshot.docs.map((doc) => {
		return { key: doc.id, ...doc.data() } as RoleTable;
	});

	return results;
});

export const getRole = createAsyncThunk("roles/getRole", async (id: string) => {
	const docRef = doc(db, "roles", id);
	const docSnapshot = await getDoc(docRef);
	if (docSnapshot.exists()) {
		const rawData = docSnapshot.data();
		return {
			...rawData,
			key: id,
		} as RoleTable;
	} else {
		return null;
	}
});
