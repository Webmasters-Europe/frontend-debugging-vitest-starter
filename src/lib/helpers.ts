import { Product } from './datatypes';

export const fetchProductsByCategory = async (
  category: string
): Promise<Product[]> => {
  try {
    const response = await fetch(
      `https://dummyjson.com/products/category/${category}`
    );
    const data = await response.json();
    return data.products;
  } catch (error) {
    console.error(`Failed to fetch products for category ${category}:`, error);
    return [];
  }
};
