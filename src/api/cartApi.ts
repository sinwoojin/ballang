import { Cart, CartItem, Response } from "@/types/app.types";
import axios from "axios";
import { ballangApi } from "./api";

const getCart = async () => {
  try {
    const url = "/cart";
    const response = await ballangApi.get<Response<Cart>>(url);
    const data = response.data.result;
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Axios error:", error.response?.data || error.message);
    } else {
      console.error("Unexpected error:", error);
    }
    throw new Error(String(error)); // 오류를 다시 던져 호출부에서 처리 가능하도록
  }
};

/**
 * 사용자의 장바구니에 상품을 추가합니다.
 */
const addItemToCart = async (productId: number) => {
  try {
    const response = await ballangApi.post<Response<CartItem>>(
      `/cart/products/${productId}`
    );
    const cartItem = response.data.result;

    return cartItem;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      // Axios 에러인지 확인
      if (error.response) {
        // 서버에서 응답은 받았지만 상태 코드가 4xx, 5xx인 경우
        console.error("Response error:", error.response.data);
      } else if (error.request) {
        // 요청은 전송됐지만 응답을 받지 못한 경우
        console.error("Request error:", error.request);
      } else {
        // 기타 오류
        console.error("Error message:", error.message);
      }
    } else {
      // Axios 에러가 아닌 일반 에러
      console.error("Unexpected error:", error);
    }
    throw new Error(error instanceof Error ? error.message : String(error));
  }
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
