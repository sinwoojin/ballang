"use client";

import { logOut, refreshToken } from "@/api/api";
import { useAuthStore } from "@/zustand/auth.store";
import { PropsWithChildren, useEffect } from "react";

function AuthProvider({ children }: PropsWithChildren) {
	const initializeAuth = useAuthStore((state) => state.initializeAuth);
	const logIn = useAuthStore((state) => state.logIn);

	useEffect(() => {
		refreshToken().then((isRefreshTokenSuccess) => {
			if (!isRefreshTokenSuccess) {
				logIn();
			} else {
				logOut();
			}

			initializeAuth();
		});
	}, []);

	return children;
}

export default AuthProvider;
