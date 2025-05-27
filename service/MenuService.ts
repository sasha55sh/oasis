import axios from "axios";
import { BASE_URL } from "@/config/config";

export const getMenu = async (): Promise<any> => {
  try {
    const responce = await axios.get(`${BASE_URL}/menu`);
    return responce.data;
  } catch (error) {
    console.error("Error getting menu:", error);
    throw error;
  }
};
