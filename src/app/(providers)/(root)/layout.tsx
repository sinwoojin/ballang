import { PropsWithChildren } from "react";

import AuthProvider from "@/app/(providers)/_compontents/AuthProvider";
import TanstackQueryProvider from "../_compontents/TanstackQueryProvider";
import Header from "./_components/Header/Header";

function RootLayout({ children }: PropsWithChildren) {
	return (
		<AuthProvider>
			<TanstackQueryProvider>
				<Header />
				{children}
			</TanstackQueryProvider>
		</AuthProvider>
	);
}

export default RootLayout;
