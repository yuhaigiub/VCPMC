import { RootState } from "../../app/store";

export const getAllPlaylistsQuery = (state: RootState) => state.playlists.data;
