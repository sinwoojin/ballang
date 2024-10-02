import { getBrands, getProducts } from "@/api/api";
import React from "react";
import { Ballang, Brand } from "../../../../schemas/list.schema";
import Link from "next/link";
import BallangList from "@/app/_components/BallangList/BallangList";

async function Brands({
	searchParams,
}: {
	searchParams: { brandId: string | undefined };
}) {
	const brands = (await getBrands()) as Brand[];
	return (
		<div className="px-5 lg:px-8 py-6 lg:py-10 mx-auto max-w-screen-lg data-[full-width=true]:max-w-none flex flex-col grow w-full items-stretch">
			<h2 className="font-bold text-3xl text-center my-12">Brands</h2>
			<div className="mx-auto max-w-screen-lg mb-16">
				<ul className="gap-x-4 text-sm grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-y-5 justify-items-center">
					<Link
						href="/brands"
						className="text-slate-700 data-[active=true]:text-black data-[active=true]:font-semibold hover:text-black transition-all"
					>
						ALL
					</Link>
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
			<BallangList brandId={searchParams.brandId} />
		</div>
	);
}

export default Brands;
