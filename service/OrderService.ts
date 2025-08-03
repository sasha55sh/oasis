import axios from "axios";
import { BASE_URL } from "@/config/config";

export const createOrder = async (orderData: any) => {
  const token = localStorage.getItem("token");
  const headers: any = {
    "Content-Type": "application/json",
  };
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }
  const res = await axios.post(`${BASE_URL}/order`, orderData, { headers });
  return res.data;
};

export const getOrders = async () => {
  const token = localStorage.getItem("token");
  if (!token) throw new Error("Unauthorized");
  const response = await axios.get(`${BASE_URL}/account/orders`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
