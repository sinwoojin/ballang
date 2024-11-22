import React from "react";

function Page({ children }: { children: React.ReactNode }) {
	return <main className="px-5 py-14">{children}</main>;
}

export default Page;
