import axios from "axios";
import { ApiResponse } from "@/types";
import cookies from "@/lib/cookies";

export default async function verifyEmail(verifyToken?: string): Promise<ApiResponse> {
    try {
        // Get the token from cookies
        const token = cookies.get("token");
        if (!token) {
            return {
                success: false,
                message: "Token not found in cookies",
            };
        }

        const res = await axios({
            url: process.env.NEXT_PUBLIC_API_URL + `/user/verify-email/${verifyToken || ""}`,
            method: "get",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        return res.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            return {
                success: false,
                message: error.response?.data?.message || "Unknown error occurred during verification email",
            };
        } else {
            return {
                success: false,
                message: "Unexpected error during verification email",
            };
        }
    }
}