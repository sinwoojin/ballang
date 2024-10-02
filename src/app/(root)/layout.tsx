import React, { PropsWithChildren } from "react";
import Header from "../_components/Header/Header";

function layout({ children }: PropsWithChildren) {
	return (
		<div>
			<Header />
			{children}
		</div>
	);
}

export default layout;
