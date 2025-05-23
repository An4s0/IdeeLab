import axios from "axios";
import { ApiResponse, UserType } from "@/types";
import cookies from "../cookies";

interface RegisterDataResponse extends UserType {
  token: string;
}

export default async function register(credentials: {
  name: string;
  username: string;
  email: string;
  password: string;
}): Promise<ApiResponse<RegisterDataResponse>> {
  try {
    const res = await axios({
      url: process.env.NEXT_PUBLIC_API_URL + "/user/register",
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        ...credentials,
      },
    });

    if (res.data.success) {
      // Set the token in cookies
      cookies.set("token", res.data.data.token, 7);
    }

    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return {
        success: false,
        message:
          error.response?.data?.message ||
          "Unknown error occurred during registration",
      };
    } else {
      return {
        success: false,
        message: "Unexpected error during registration",
      };
    }
  }
}
