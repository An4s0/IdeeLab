import axios from "axios";
import { ApiResponse, User } from "@/types";
import cookies from "./cookies";

interface iData {
  name: string;
  username: string;
  email: string;
  password: string;
  confirmPassword?: string;
  terms: boolean;
}

const user = {
  register: async (
    authData: iData,
  ): Promise<ApiResponse<{ token: string }>> => {
    try {
      const res = await axios({
        url: process.env.NEXT_PUBLIC_API_URL + "/auth/register",
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        data: {
          ...authData,
        },
      });

      const data = await res.data;

      return data as ApiResponse<{ token: string }>;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const err = error.response?.data as Partial<ApiResponse> | undefined;
        return {
          success: false,
          message: err?.message ?? "Unknown error occurred from server",
        } as ApiResponse<{ token: string }>;
      } else {
        return {
          success: false,
          message: "Something went wrong",
        } as ApiResponse<{ token: string }>;
      }
    }
  },
  login: async (authData: {
    email: string;
    password: string;
  }): Promise<ApiResponse<{ token: string }>> => {
    try {
      const res = await axios({
        url: process.env.NEXT_PUBLIC_API_URL + "/auth/login",
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        data: {
          ...authData,
        },
      });

      const data = await res.data;

      return data as ApiResponse<{ token: string }>;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const err = error.response?.data as Partial<ApiResponse> | undefined;
        return {
          success: false,
          message: err?.message ?? "Unknown error occurred from server",
        } as ApiResponse<{ token: string }>;
      } else {
        return {
          success: false,
          message: "Something went wrong",
        } as ApiResponse<{ token: string }>;
      }
    }
  },
  verifyToken: async (
    token: string,
  ): Promise<ApiResponse<{ token: string }>> => {
    try {
      const res = await axios({
        url: process.env.NEXT_PUBLIC_API_URL + "/auth/verify-token",
        method: "get",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.data;

      return data as ApiResponse<{ token: string }>;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const err = error.response?.data as Partial<ApiResponse> | undefined;
        return {
          success: false,
          message: err?.message ?? "Unknown error occurred from server",
        } as ApiResponse<{ token: string }>;
      } else {
        return {
          success: false,
          message: "Something went wrong",
        } as ApiResponse<{ token: string }>;
      }
    }
  },
  get: async (): Promise<ApiResponse<User>> => {
    try {
      const token = cookies.get("token");
      if (!token) {
        return {
          success: false,
          message: "No token provided",
        };
      }
      const res = await axios({
        url: process.env.NEXT_PUBLIC_API_URL + "/auth",
        method: "get",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.data;

      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const err = error.response?.data as Partial<ApiResponse> | undefined;
        return {
          success: false,
          message: err?.message ?? "Unknown error occurred from server",
        };
      } else {
        return {
          success: false,
          message: "Something went wrong",
        };
      }
    }
  },
};

export default user;
