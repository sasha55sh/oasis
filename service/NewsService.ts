import axios from "axios";
import { BASE_URL } from "@/config/config";
import { InfoMessage } from "@/config/types";

export const getAllNews = async (): Promise<any> => {
  try {
    const responce = await axios.get(`${BASE_URL}/news`);
    return responce.data;
  } catch (error) {
    console.error("Error getting news:", error);
    throw error;
  }
};

export const getNewsByHandle = async (
  articleHandle: string,
  setInfoMessage?: (message: InfoMessage) => void
): Promise<any> => {
  let attempts = 0;
  while (attempts < 3) {
    try {
      const response = await axios.get(`${BASE_URL}/news/${articleHandle}`);
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
      console.error("Failed to fetch article by handle:", error);
    }
    await delay(1000);
    attempts++;
  }
};

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
