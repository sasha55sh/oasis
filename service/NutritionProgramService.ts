import axios from "axios";
import { BASE_URL } from "@/config/config";
import { InfoMessage } from "@/config/types";

export const getNutritionPrograms = async (
    setInfoMessage?: (message: InfoMessage) => void
): Promise<any> => {
    let attempts = 0;

    while (attempts < 3) {
        try {
            const response = await axios.get(`${BASE_URL}/nutrition-programs`, {
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

export const createProgramRequest = async (programData: any) => {
    const token = localStorage.getItem("token");
    const headers: any = {
        "Content-Type": "application/json",
    };
    if (token) {
        headers.Authorization = `Bearer ${token}`;
    }
    const res = await axios.post(`${BASE_URL}/nutrition-programs`, programData, { headers });
    return res.data;
};


function delay(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
