"use client";

import { refreshToken } from "@/api/api";
import { useAuthStore } from "@/zustand/auth.store";
import React, { PropsWithChildren, useEffect } from "react";

function AuthProvider({ children }: PropsWithChildren) {
	const setIsLoggedIn = useAuthStore((state) => state.setIsLoggedIn);
	useEffect(() => {
		(async () => {
			const data = await refreshToken();
			if (data.result) {
				setIsLoggedIn(true);
			} else {
				setIsLoggedIn(false);
			}
		})();
	}, []);

	return children;
}

export default AuthProvider;
