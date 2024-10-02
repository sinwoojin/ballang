import { getCart, getProduct } from "@/api/api";
import React from "react";

getCart();

async function Ballang({ params: { productId } }) {
	const ballang = await getProduct(productId);

	return (
		<section className="px-5 lg:px-8 py-6 lg:py-10 mx-auto max-w-screen-lg data-[full-width=true]:max-w-none flex grow w-full items-stretch justify-between">
			<div className="relative aspect-[3/4] w-[48%]">
				<img src={ballang.imgSrc} />
			</div>
			<div className="w-[50%]">
				<h2 className="text-[17px] border-b pb-2.5 my-8  font-bold">
					{ballang.brand.nameKr}/{ballang.brand.nameEn}
				</h2>
				<p className="font-semibold text-[16px] my-9">{ballang.name}</p>
				<div className="flex flex-wrap gap-y-9 text-[15px]">
					<span className="text-slate-900 font-bold w-[30%] ">
						정가
					</span>
					<p className="text-red-500 line-through w-[70%]">
						₩{ballang.originalPrice.toLocaleString()}
					</p>
					<span className="text-slate-900 font-bold w-[30%]">
						판매가
					</span>
					<p className="col-span-4 font-semibold w-[70%]">
						₩{ballang.price.toLocaleString()}
					</p>
					<span className="text-slate-900 font-bold w-[30%]">
						배송
					</span>
					<p className="w-[70%]">{ballang.deliveryType}</p>
					<span className="text-slate-900 font-bold w-[30%]">
						잔여 재고
					</span>
					<p className="w-[70%]">{ballang.onlineStock}</p>
					<button className="mx-auto border py-6 w-full border-blue-500 text-blue-500">
						장바구니에 담기
					</button>
				</div>
			</div>
		</section>
	);
}

export default Ballang;
