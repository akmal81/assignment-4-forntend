import { env } from "@/env"

const API_URL = env.API_URL


interface GetTutorParams {
    isFeatured?: boolean;
    search?: string;
}

interface ServiceOptions {
    cache?: RequestCache;
    revalidate?: number
}

export const tutorService = {
    getTutor: async function (params?: GetTutorParams, options?: ServiceOptions) {

        try {
            const url = new URL(`${API_URL}/tutors`)

            if (params) {

                Object.entries(params).forEach(([key, value]) => {
                    if (value !== undefined && value !== null && value !== '') {
                        url.searchParams.append(key, value)
                    }
                })
            }
            const config: RequestInit = {};
            if (options?.cache) {
                config.cache = options.cache
            }
            if (options?.revalidate) {
                config.next = { revalidate: options.revalidate }
            }
            const res = await fetch(url.toString(), config);

            const data = await res.json();
            return { data: data, error: null };
        } catch (error) {
            return { data: null, error: { message: "Something went wrong" } };
        }
    },

    getTutorById: async function (id: string) {
        try {

            const res = await fetch(`${API_URL}/tutors/${id}`)
            const data = await res.json();
            return { data: data, error: null };


        } catch (error) {
            return { data: null, error: { message: "Something went wrong" } }
        }

    }
}