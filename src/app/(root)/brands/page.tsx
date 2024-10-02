import { getBrands } from "@/api/api";
import React from "react";
import { Brand } from "../../../../schemas/list.schema";
import Link from "next/link";

async function Brands() {
	const brands = (await getBrands()) as Brand[];
	return (
		<div className="text-center">
			<h2 className="font-bold text-3xl text-center my-12">Brands</h2>
			<div className="mx-auto max-w-screen-lg mb-16">
				<ul className="gap-x-4 text-sm grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-y-5 justify-items-center">
					<li className="text-slate-700 data-[active=true]:text-black data-[active=true]:font-semibold hover:text-black transition-all">
						ALL
					</li>
					{brands?.map((brand) => (
						<li key={brand.id}>
							<Link
								href={{
									pathname: "/brands",
									query: { brandId: `${brand.id}` },
								}}
							>
								{brand.nameKr}
							</Link>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}

export default Brands;
