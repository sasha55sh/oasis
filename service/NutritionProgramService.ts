import axios from "axios";
import { BASE_URL } from "@/config/config";
import { NutritionProgram } from "@/config/types";
export const getNutritionPrograms = async (): Promise<NutritionProgram[]> => {
    try {
        const response = await axios.get(`${BASE_URL}/nutrition-programs`);
        return response.data;
    } catch (error) {
        console.error("Failed to fetch nutrition programs:", error);
        throw error;
    }
};

type ProgramRequestPayload = {
    userData: { uid: string | undefined; firstName: string; phoneNumber: string; method: string; street: string; house: string; flat: string };
    programData: { title: string; kcal: number; duration: number; totalPrice: number };
    comments: string;
    status: string;
};

export const createProgramRequest = async (programData: ProgramRequestPayload) => {
    const token = localStorage.getItem("token");
    const headers: Record<string, string> = {
        "Content-Type": "application/json",
    };
    if (token) {
        headers.Authorization = `Bearer ${token}`;
    }
    const res = await axios.post(`${BASE_URL}/nutrition-programs`, programData, { headers });
    return res.data;
};
