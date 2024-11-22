import { PropsWithChildren } from "react";

function ModalProvider({ children }: PropsWithChildren) {
	return <div>{children}</div>;
}

export default ModalProvider;
