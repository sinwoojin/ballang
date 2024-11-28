import { PropsWithChildren } from "react";

import AuthProvider from "@/app/(providers)/_compontents/AuthProvider";
import ModalProvider from "../_compontents/ModalProvider";
import TanstackQueryProvider from "../_compontents/TanstackQueryProvider";
import Header from "./_components/Header/Header";

function RootLayout({ children }: PropsWithChildren) {
	return (
		<AuthProvider>
			<ModalProvider>
				<TanstackQueryProvider>
					<Header />
					{children}
				</TanstackQueryProvider>
			</ModalProvider>
		</AuthProvider>
	);
}

export default RootLayout;
