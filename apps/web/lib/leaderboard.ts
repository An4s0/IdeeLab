import axios from "axios";
import { ApiResponse } from "@/types";

const leaderboard = async (limit: number) => {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/leaderboard?limit=${limit}`,
    );

    const data = res.data;

    return data as ApiResponse;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const err = error.response?.data as Partial<ApiResponse> | undefined;
      return {
        success: false,
        message: err?.message ?? "Unknown error occurred from server",
      } as ApiResponse;
    } else {
      return {
        success: false,
        message: "Something went wrong",
      } as ApiResponse;
    }
  }
};

export default leaderboard;
