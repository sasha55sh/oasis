import axios from "axios";
import { BASE_URL } from "@/config/config";
import { InfoMessage } from "@/config/types";

export const getProducts = async (
  filters?: object,
  optionsString?: string,
  limit?: number,
  pageCursor?: string,
  sortKey?: string,
  reverse?: boolean,
  pagination?: boolean,
  setInfoMessage?: (message: InfoMessage) => void
): Promise<any> => {
  let attempts = 0;

  while (attempts < 3) {
    try {
      const response = await axios.get(`${BASE_URL}/shop`, {
        params: {
          filters,
          optionsString,
          pageCursor,
          limit,
          sortKey,
          reverse,
          pagination,
        },
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        return response.data;
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (
          (error.status === 500 || error.code === "ERR_NETWORK") &&
          attempts === 2
        ) {
          if (setInfoMessage) {
            setInfoMessage({
              type: "error",
              text: "Oops! Server error!",
            });
          }
        }
      }
      console.error(`Attempt ${attempts + 1}: Failed to fetch products`, error);
    }
    attempts++;
    await delay(1000);
  }
  const result = { products: [], count: 0, pageInfo: "" };
  return result;
};

export const searchProducts = async (
  searchText: string,
  setInfoMessage?: (message: InfoMessage) => void
): Promise<any> => {
  let attempts = 0;
  while (attempts < 3) {
    try {
      const response = await axios.get(`${BASE_URL}/search`, {
        params: { value: searchText },
      });
      if (response.status === 200) {
        return response.data;
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (
          (error.status === 500 || error.code === "ERR_NETWORK") &&
          attempts === 2
        ) {
          if (setInfoMessage) {
            setInfoMessage({
              type: "error",
              text: "Oops! Server error!",
            });
          }
        }
      }
      console.error("Failed to search products:", error);
    }
    await delay(1000);
    attempts++;
  }
};

export const getProductByHandle = async (
  handle: string,
  setInfoMessage?: (message: InfoMessage) => void
): Promise<any> => {
  let attempts = 0;
  while (attempts < 3) {
    try {
      const response = await axios.get(`${BASE_URL}/product/${handle}`);
      if (response.status === 200) {
        return response.data;
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (
          (error.status === 500 || error.code === "ERR_NETWORK") &&
          attempts === 2
        ) {
          if (setInfoMessage) {
            setInfoMessage({
              type: "error",
              text: "Oops! Server error!",
            });
          }
        }
      }
      console.error("Failed to fetch product by handle:", error);
    }
    await delay(1000);
    attempts++;
  }
};

export const getProductsByCategory = async (
  category: string,
  setInfoMessage?: (message: InfoMessage) => void
): Promise<any> => {
  let attempts = 0;
  while (attempts < 3) {
    try {
      const response = await axios.get(`${BASE_URL}/shop/${category}`);
      if (response.status === 200) {
        return response.data;
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (
          (error.status === 500 || error.code === "ERR_NETWORK") &&
          attempts === 2
        ) {
          if (setInfoMessage) {
            setInfoMessage({
              type: "error",
              text: "Oops! Server error!",
            });
          }
        }
      }
      console.error("Failed to fetch product by category:", error);
    }
    await delay(1000);
    attempts++;
  }
};

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
