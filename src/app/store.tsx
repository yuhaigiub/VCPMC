import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import accounts from "../slices/records/slice";
import roles from "../slices/roles/slice";
import contracts from "../slices/contracts/slice";
import gernes from "../slices/gernes/slice";
import users from "../slices/users/slice";

const store = configureStore({
	reducer: {
		accounts,
		roles,
		contracts,
		gernes,
		users,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// custom hooks
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
