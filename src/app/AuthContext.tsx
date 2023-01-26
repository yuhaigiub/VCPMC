import React, { useState, useEffect, useContext } from "react";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";

import { auth } from "./firebaseConfig";

const AuthContext = React.createContext<any>(null);

// custom hook to get auth data
export const useAuth = () => {
	return useContext(AuthContext);
};

// context wrapper
const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const [currentUser, setCurrentUser] = useState<any>(null);

	// if login successfully, onAuthStateChange will catch current user information
	// so this method don't need to worry about it
	const signIn: ({ email, password }: EmailAndPasswordType) => void = ({ email, password }) => {
		return signInWithEmailAndPassword(auth, email, password);
	};

	const value = {
		currentUser,
		signIn,
	};

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			setCurrentUser(user);
		});

		return unsubscribe;
	}, []);

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

type EmailAndPasswordType = {
	email: string;
	password: string;
};
