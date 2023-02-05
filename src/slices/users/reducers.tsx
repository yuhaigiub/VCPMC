import { createAsyncThunk } from "@reduxjs/toolkit";
import { collection, getDocs, doc, getDoc, query, where, setDoc, addDoc } from "firebase/firestore";
import { db } from "../../app/firebaseConfig";
import { UserTable } from "../../types/data";

export const getAllUsers = createAsyncThunk("users/getAllUsers", async () => {
	const querySnapshot = await getDocs(collection(db, "users"));
	const results = querySnapshot.docs.map((doc) => {
		return { ...doc.data(), key: doc.id } as UserTable;
	});
	return results;
});

export const getUser = createAsyncThunk("users/getUser", async (id: string) => {
	const docRef = doc(db, "users", id);
	const docSnapshot = await getDoc(docRef);
	if (docSnapshot.exists()) {
		return { ...docSnapshot.data(), key: id } as UserTable;
	} else {
		return null;
	}
});

export const getUserByUsername = createAsyncThunk(
	"users/getUserByUsername",
	async (username: string) => {
		const q = query(collection(db, "users"), where("username", "==", username));
		const querySnapshot = await getDocs(q);
		if (querySnapshot.docs.length !== 0) {
			return {
				...querySnapshot.docs[0].data(),
				key: querySnapshot.docs[0].id,
			} as UserTable;
		} else {
			return null;
		}
	}
);

export const addUser = createAsyncThunk("users/addUser", async (data: UserTable) => {
	const { key, ...document } = data;
	const docRef = await addDoc(collection(db, "users"), {
		...document,
	});
	return { ...document, key: docRef.id } as UserTable;
});

export const updateUser = createAsyncThunk("users/updateUser", async (data: UserTable) => {
	const { key, ...document } = data;
	const docRef = doc(db, "users", key);
	await setDoc(docRef, {
		...document,
	});

	return data;
});
