import axios from "axios";
import { BASE_URL } from "@/config/config";

export const createOrder = async (orderData: any) => {
  const res = await axios.post(BASE_URL, orderData);
  return res.data;
};