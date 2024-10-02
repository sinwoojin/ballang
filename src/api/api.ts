import axios from "axios";

const baseURL = "https://api.ballang.yoojinyoung.com/";

const ballangClient = axios.create({
	baseURL,
	withCredentials: true,
});

export const getProduct = async (id: string) => {
	const url = `/products/${id}`;
	const response = await ballangClient.get(url);
	const ballang = await response.data.result;

	return ballang;
};

export const getBrands = async () => {
	const url = "/brands";
	const response = await ballangClient.get(url);
	const data = await response.data.result;

	return data;
};

export const getProducts = async (brandId?: string) => {
	if (brandId === undefined) {
		const url = "/products";
		const response = await ballangClient.get(url);

		const data = response.data.result;
		return data;
	} else {
		const response = await ballangClient.get(`/brands/${brandId}`);
		const brand = await response.data.result.products;
		return brand;
	}
};

export const getCart = async () => {
	const url = "/cart";
	const response = await ballangClient.get(url);
	const data = response.data.result;

	return data;
};

export const signUp = async (data) => {
	const url = "/auth/sign-up";
	const response = await ballangClient.post(url, data);

	console.log(response);
};

export const logOut = async () => {
	const url = "/auth/log-out";
	const logOut = await ballangClient.delete(url);

	return logOut;
};

export const refreshToken = async () => {
	const url = "/auth/refresh-token";
	const response = await ballangClient.get(url);

	const data = response.data;
	return data;
};
