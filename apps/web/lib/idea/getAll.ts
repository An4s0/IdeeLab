import axios from "axios";
import { ApiResponse, IdeaType } from "@/types";

export default async function getAll(
  limit: number = 10,
  offset: number = 0,
  status: string = "published",
): Promise<ApiResponse<IdeaType[]>> {
  try {
    const res = await axios({
      url:
        process.env.NEXT_PUBLIC_API_URL +
        `/idea/get?limit=${limit}&offset=${offset}&status=${status}`,
      method: "get",
    });

    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return {
        success: false,
        message:
          error.response?.data?.message ||
          "Unknown error occurred during fetching idea",
      };
    } else {
      return {
        success: false,
        message: "Unexpected error during fetching idea",
      };
    }
  }
}
