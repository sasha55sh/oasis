import axios from "axios";
import { BASE_URL } from "@/config/config";
import { News } from "@/config/types";

export const getAllNews = async (): Promise<News[]> => {
  try {
    const responce = await axios.get(`${BASE_URL}/news`);
    return responce.data;
  } catch (error) {
    console.error("Error getting news:", error);
    throw error;
  }
};

export const getNewsByHandle = async (articleHandle: string): Promise<News> => {
  try {
    const response = await axios.get(`${BASE_URL}/news/${articleHandle}`);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch article by handle:", error);
    throw error;
  }
};
