import axios from "axios";
import { BASE_URL } from "@/config/config";

export const getMenuByCategory = async (category = ""): Promise<any> => {
  try {
    const responce = await axios.get(`${BASE_URL}/menu`, {
      params: { category },
    });
    return responce.data;
  } catch (error) {
    console.error("Error getting menu:", error);
    throw error;
  }
};
