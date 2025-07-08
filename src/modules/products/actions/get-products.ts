import { tesloApi } from '@/api/TesloAPi';
import type { Product } from '../interfaces/product';
import { getProductImage } from './get-Product-image';

export const getProducts = async (page: number = 1, limit: number = 10) => {
  try {
    const { data } = await tesloApi.get<Product[]>(
      `/products?limit=${limit}&offset=${page * limit}`,
    );
    console.log(data);
    // return data.map((product) => {
    //   return {
    //     ...product,
    //     images: product.images.map(getProductImage),
    //   };
    // });
    return data.map((product) => ({
      ...product,
      images: product.images.map(getProductImage),
    }));
  } catch (error) {
    console.log(error);
    throw new Error('error getting product');
  }
};
