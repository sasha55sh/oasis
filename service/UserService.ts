import axios from "axios";
import { CardProps } from "@/config/types";
import { BASE_URL } from "@/config/config";

export const getUser = async () => {
  const token = localStorage.getItem("token");
  const response = await axios.get(`${BASE_URL}/account`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const updateUser = async (data: {
  firstName?: string;
  email?: string;
}) => {
  const token = localStorage.getItem("token");
  const response = await axios.patch(`${BASE_URL}/account`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const logoutUser = () => {
  localStorage.removeItem("token");
};

export const toggleFavorite = async (product: CardProps) => {
  const token = localStorage.getItem("token");
  const response = await axios.post(
    `${BASE_URL}/favorites`,
    { product },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data.favorites;
};

export const getFavorites = async () => {
  const token = localStorage.getItem("token");
  const response = await axios.get(`${BASE_URL}/favorites`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data.favorites;
};
