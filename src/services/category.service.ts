import { env } from "@/env"

const API_URL = env.API_URL

export const categoryService = {
    getCategory: async function () {

        try {
            const url = new URL(`${API_URL}/categories`)

            const res = await fetch(url.toString());

            const data = await res.json();
            // console.log(data)
            return { data: data, error: null };
        } catch (error) {
            return { data: null, error: { message: "Something went wrong" } };
        }
    },
}