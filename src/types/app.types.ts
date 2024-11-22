export type Response<T> = {
	success: boolean;
	error: null | any;
	result: T;
};

export type Product = {
	id: number;
	name: string;
	imgSrc: string;
	onlineStock: number;
	price: number;
	originalPrice: number;
	deliveryType: string;
	brandId: number;
	brand: Brand;
};

export type Brand = {
	id: number;
	nameKr: string;
	nameEn: string;
};

export type BrandDetail = Brand & {
	products: Product[];
};

export type CartItem = {
	id: number;
	cartId: number;
	productId: number;
	quantity: number;
	createdAt: string;
	updatedAt: string;
};

export type Cart = {
	id: number;
	items: (CartItem & { product: Product })[];
};
