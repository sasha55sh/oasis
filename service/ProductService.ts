import axios from "axios";
import { BASE_URL } from "@/config/config";
import { Product } from "@/config/types";

export const getProducts = async (): Promise<Product[]> => {
  try {
    const response = await axios.get(`${BASE_URL}/shop`);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch products:", error);
    throw error;
  }
};

export const searchProducts = async (searchText: string): Promise<Product[]> => {
  try {
    const response = await axios.get(`${BASE_URL}/search`, {
      params: { value: searchText },
    });
    return response.data;
  } catch (error) {
    console.error("Failed to search products:", error);
    throw error;
  }
};

export const getProductByHandle = async (handle: string): Promise<Product> => {
  try {
    const response = await axios.get(`${BASE_URL}/product/${handle}`);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch product by handle:", error);
    throw error;
  }
};

export const getProductsByCategory = async (category: string): Promise<Product[]> => {
  try {
    const response = await axios.get(`${BASE_URL}/shop/${category}`);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch products by category:", error);
    throw error;
  }
};

export const getSortedProducts = async (sortType: string): Promise<Product[]> => {
  try {
    const response = await axios.get(`${BASE_URL}/sort?sort=${sortType}`);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch sorted products:", error);
    throw error;
  }
};
