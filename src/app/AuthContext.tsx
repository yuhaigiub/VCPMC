import React, { useState, useEffect, useContext } from "react";
import {
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	updateEmail,
	updatePassword,
} from "firebase/auth";

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
	const signIn: ({ email, password }: EmailAndPasswordType) => any = ({ email, password }) => {
		return signInWithEmailAndPassword(auth, email, password);
	};

	// create a new user without log out current user
	const signUp: ({ email, password }: EmailAndPasswordType) => any = async ({
		email,
		password,
	}) => {
		const current = auth.currentUser;
		return await createUserWithEmailAndPassword(auth, email, password).then((credential) => {
			auth.updateCurrentUser(current);
		});
	};

	const editEmail = (newEmail: string) => {
		return updateEmail(currentUser, newEmail);
	};

	const editPassword = (newPassword: string) => {
		return updatePassword(currentUser, newPassword);
	};

	useEffect(() => {
		const subscriber = onAuthStateChanged(auth, (user) => {
			if (user) {
				console.log(`email: ${user.email}`);
				setCurrentUser(user);
			} else {
				console.log("anonymous");
			}

			return subscriber;
		});
	}, []);

	const value = {
		currentUser,
		signIn,
		signUp,
		editEmail,
		editPassword,
	};

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

type EmailAndPasswordType = {
	email: string;
	password: string;
};
