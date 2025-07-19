import axios from "axios";
import { BASE_URL } from "@/config/config";

export const getAllFaq = async (): Promise<any> => {
  try {
    const responce = await axios.get(`${BASE_URL}/faq`);
    return responce.data;
  } catch (error) {
    console.error("Error getting faq:", error);
    throw error;
  }
};
