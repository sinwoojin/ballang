import { create } from "zustand";

type AuthStoreState = {
	isAuthInitialized: boolean;
	initializeAuth: () => void;

	isLoggedIn: boolean;
	logIn: () => void;
	logOut: () => void;
};

export const useAuthStore = create<AuthStoreState>((set) => ({
	isAuthInitialized: false,
	initializeAuth: () => set({ isAuthInitialized: true }),

	isLoggedIn: false,
	logIn: () => set({ isLoggedIn: true }),
	logOut: () => set({ isLoggedIn: false }),
}));
