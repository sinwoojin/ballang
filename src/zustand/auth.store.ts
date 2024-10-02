import { create } from "zustand";

type useAuthStoreType = {
	isLoggedIn: boolean;
	setIsLoggedIn: (isLoggedIn: boolean) => void;

	initialized: boolean;
	setInitialized: () => void;
};

export const useAuthStore = create<useAuthStoreType>((set) => ({
	isLoggedIn: false,
	setIsLoggedIn: (isLoggedIn) => set({ isLoggedIn }),

	initialized: false,
	setInitialized: () => set({ initialized: true }),
}));
