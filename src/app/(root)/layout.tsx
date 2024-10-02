import React, { PropsWithChildren, useEffect } from "react";
import Header from "../_components/Header/Header";
import AuthProvider from "@/providers/AuthProvider";

function layout({ children }: PropsWithChildren) {
	return (
		<AuthProvider>
			<Header />
			{children}
		</AuthProvider>
	);
}

export default layout;
