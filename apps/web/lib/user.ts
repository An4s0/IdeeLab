import axios from "axios"
import ApiResponse from "./api-res";

interface iData {
    name: string;
    username: string;
    email: string;
    password: string;
    confirmPassword?: string;
    terms: boolean;
};

const user = {
    register: async (authData: iData) => {
        const res = await axios({
            url: process.env.NEXT_PUBLIC_API_URL + "/auth/register",
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            data: {
                ...authData
            }
        })

        const data = await res.data;

        return data as ApiResponse;
    }
}

export default user;