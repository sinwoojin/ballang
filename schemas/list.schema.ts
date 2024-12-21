export type Ballang = {
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

export type Response<T> = {
  success: boolean;
  eroor: null | any;
  result: T;
};
