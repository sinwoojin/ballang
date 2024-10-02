import { createContext, useContext } from "react";

type AuthContextValue = {
	isAuthInitialized: boolean;
	isLoggedIn: boolean;
};

const initialContextValue: AuthContextValue = {
	isAuthInitialized: false,
	isLoggedIn: false,
};

const AuthContext = createContext<AuthContextValue>(initialContextValue);

export const useAuth = () => useContext(AuthContext);
