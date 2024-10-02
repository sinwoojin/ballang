import { getProduct } from "@/api/api";
import React from "react";

async function Ballang({ params: { productId } }) {
	const ballang = await getProduct(productId);
	console.log(ballang);
	return (
		<section className="px-5 lg:px-8 py-6 lg:py-10 mx-auto max-w-screen-lg data-[full-width=true]:max-w-none flex grow w-full items-stretch justify-between">
			<div className="relative aspect-[3/4] w-[48%]">
				<img src={ballang.imgSrc} />
			</div>
			<div className="w-[50%]">
				<p className="text-[15px] border-b pb-2.5 mb-2.5  font-bold">
					{ballang.brand.nameKr}/{ballang.brand.nameEn}
				</p>
				<p>{ballang.name}</p>
				<div className="grid grid-cols-5 my-12 gap-y-5 text-[15px]">
					<span className="text-slate-900 font-bold">정가</span>
					<p className="text-red-500 line-through">
						₩{ballang.originalPrice.toLocaleString()}
					</p>
					<span className="text-slate-900 font-bold">판매가</span>
					<p className="text-red-500 line-through">
						₩{ballang.originalPrice.toLocaleString()}
					</p>
					<span className="text-slate-900 font-bold">배송</span>
					<p className="text-red-500 line-through">
						₩{ballang.originalPrice.toLocaleString()}
					</p>
					<span className="text-slate-900 font-bold">잔여 재고</span>
					<p className="text-red-500 line-through">
						₩{ballang.originalPrice.toLocaleString()}
					</p>
				</div>
			</div>
		</section>
	);
}

export default Ballang;
