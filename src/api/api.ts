import { Brand, BrandDetail, Product, Response } from "@/types/app.types";
import axios from "axios";

const baseURL = "https://api.ballang.yoojinyoung.com/";

export const ballangApi = axios.create({
	baseURL,
	withCredentials: true,
});

ballangApi.interceptors.response.use(
	(response) => response,
	(error) => {
		// 공통 에러 처리 로직
		console.error(
			"Intercepted error:",
			error.response?.data || error.message
		);
		return Promise.reject(error); // 요청 별로 에러를 처리하려면 reject 유지
	}
);

export const getBrands = async () => {
	const url = "/brands";
	const response = await ballangApi.get<Response<Brand[]>>(url);
	const data = response.data.result;

	return data;
};

/**
 * 특정 브랜드에 대한 정보와 해당 브랜드의 모든 상품 목록을 제공합니다.
 */
export const getBrand = async (brandId: number) => {
	const response = await ballangApi.get<Response<BrandDetail>>(
		`/brands/${brandId}`
	);
	const brand = response.data.result;

	return brand;
};

/**
 * 디테일 페이지
 * @param id: string
 */
export const getProduct = async (id: number) => {
	const url = `/products/${id}`;
	const response = await ballangApi.get<Response<Product>>(url);
	const ballang = response.data.result;

	return ballang;
};

export const getProducts = async (brandId?: string) => {
	if (brandId === undefined) {
		const url = "/products";
		const response = await ballangApi.get<Response<Product[]>>(url);

		const data = response.data.result;
		return data;
	} else {
		const response = await ballangApi.get(`/brands/${brandId}`);
		const brand = response.data.result.products;
		return brand;
	}
};

export const logIn = async (data: { email: string; password: string }) => {
	try {
		const response = await ballangApi.post<Response<null>>(
			"/auth/log-in",
			data
		);

		return response.data.success;
	} catch {
		return false;
	}
};

export const logOut = async () => {
	const url = "/auth/log-out";
	const logOut = await ballangApi.delete<Response<null>>(url);

	return logOut;
};

export const refreshToken = async () => {
	const url = "/auth/refresh-token";
	const response = await ballangApi.get<Response<boolean>>(url);

	const data = response.data;
	return data;
};
