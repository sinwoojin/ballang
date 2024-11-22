import { PropsWithChildren } from "react";

function Modal({ children }: PropsWithChildren) {
	return (
		<div
			onClick={(e) => e.stopPropagation()}
			className="bg-white min-w-[300px] max-w-[480px] py-16 px-8"
		>
			{children}
		</div>
	);
}

export default Modal;
