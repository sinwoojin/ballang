import { getProducts } from "@/api/api";
import React from "react";

import Link from "next/link";
import { Ballang } from "../../../../schemas/list.schema";

async function BallangList({ brandId }: { brandId?: string }) {
	const products = (await getProducts(brandId)) as Ballang[];

	return (
		<div className="">
			<ul className="py-6 mx-auto max-w-screen-lg flex w-full flex-wrap gap-x-[2%] ">
				{products?.map((product: Ballang) => (
					<li key={product.id} className="w-[18%]">
						<Link href={`/products/${product.id}`}>
							<img src={product.imgSrc} />
							<p className="font-bold">{product.brand.nameEn}</p>
							<p>{product.name}</p>
							<div className="flex gap-x-4 font-bold">
								<span className="line-through text-red-500">
									₩{product.originalPrice.toLocaleString()}
								</span>
								<span>₩{product.price.toLocaleString()}</span>
							</div>
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
}

export default BallangList;
