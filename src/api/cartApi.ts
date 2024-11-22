import { Cart, CartItem, Response } from "@/types/app.types";
import { ballangApi } from "./api";

const getCart = async () => {
	const url = "/cart";
	const response = await ballangApi.get<Response<Cart>>(url);
	const data = response.data.result;

	return data;
};

/**
 * 사용자의 장바구니에 상품을 추가합니다.
 */
const addItemToCart = async (productId: number) => {
	const response = await ballangApi.post<Response<CartItem>>(
		`/cart/products/${productId}`
	);
	const cartItem = response.data.result;

	return cartItem;
};

/**
 * 사용자의 장바구니에서 상품을 차감합니다
 */
const removeItemFromCart = async (productId: number) => {
	const response = await ballangApi.delete<Response<CartItem>>(
		`/cart/products/${productId}`
	);
	const cartItem = response.data.result;

	return cartItem;
};

/**
 * 사용자의 장바구니에서 상품을 제거합니다.
 */
const clearItemInCart = async (productId: number) => {
	await ballangApi.delete(`/cart/products/${productId}/clear`);
};

const cartAPI = {
	getCart,
	addItemToCart,
	removeItemFromCart,
	clearItemInCart,
};

export default cartAPI;
