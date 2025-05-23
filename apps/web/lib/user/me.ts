import axios from "axios";
import { ApiResponse, UserType } from "@/types";
import cookies from "@/lib/cookies";

export default async function me(
  tokenC?: string,
): Promise<ApiResponse<UserType>> {
  try {
    // Get the token from cookies
    const token = cookies.get("token");

    const res = await axios({
      url: process.env.NEXT_PUBLIC_API_URL + `/user/me`,
      method: "get",
      headers: {
        Authorization: `Bearer ${tokenC || token}`,
      },
    });

    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return {
        success: false,
        message:
          error.response?.data?.message ||
          "Unknown error occurred during fetching user data",
      };
    } else {
      return {
        success: false,
        message: "Unexpected error during fetching user data",
      };
    }
  }
}
