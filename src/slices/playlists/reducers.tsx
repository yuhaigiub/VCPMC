import { createAsyncThunk } from "@reduxjs/toolkit";
import { getDocs, collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "../../app/firebaseConfig";
import { PlaylistTable } from "../../types/data";

export const getAllPlaylists = createAsyncThunk("playlists/getAllPlaylists", async () => {
	const querySnapshot = await getDocs(collection(db, "playlists"));
	const results = querySnapshot.docs.map((doc) => {
		return {
			...doc.data(),
			dateCreated: doc.data().dateCreated.toDate(),
			key: doc.id,
		} as PlaylistTable;
	});

	return results;
});

export const addPlaylist = createAsyncThunk(
	"playlists/addPlaylist",
	async (data: PlaylistTable) => {
		const { key, ...document } = data;
		const docRef = await addDoc(collection(db, "playlists"), {
			...document,
			dateCreated: Timestamp.fromDate(document.dateCreated),
		});
		return { ...document, key: docRef.id } as PlaylistTable;
	}
);
