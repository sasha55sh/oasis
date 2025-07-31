import axios from "axios";
import { BASE_URL } from "@/config/config";

export const verifyCodeBackend = async (idToken: string) => {
  const res = await axios.post(
    `${BASE_URL}/verify-code`,
    { idToken },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  return res.data;
};
