import { tesloApi } from '@/api/TesloAPi';
import { getProductImage } from './get-Product-image';

export const getProductByID = async (productID: string) => {
  try {
    const { data } = await tesloApi.get(`/products/${productID}`);
    console.log(data);
    return {
      ...data,
      images: data.images.map(getProductImage),
    };
  } catch (error) {
    console.log(error);
    throw new Error(`Error getting product by id ${productID}`);
  }
};
