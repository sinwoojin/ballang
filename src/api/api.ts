import axios from "axios";

const baseURL = "https://api.ballang.yoojinyoung.com/";

const ballangClient = axios.create({
	baseURL,
	withCredentials: true,
});

export const getProducts = async () => {
	const url = "/products";
	const response = await ballangClient.get(url);
	const ballangs = await response.data.result;

	console.log(ballangs);
	return ballangs;
};

export const getProduct = async (id: string) => {
	const url = `/products/${id}`;
	const response = await ballangClient.get(url);
	const ballang = await response.data.result;

	console.log(ballang);
	return ballang;
};

export const getBrands = async () => {
	const url = "/brands";
	const response = await ballangClient.get(url);
	const data = await response.data.result;

	console.log(data);
	return data;
};
