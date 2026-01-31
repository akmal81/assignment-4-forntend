import { env } from "@/env"
import { cookies } from "next/headers";

const API_URL = env.API_URL


interface GetTutorParams {
    isFeatured?: boolean;
    id?:string
    search?: string;
    userId?:string;
    rating?:number;
    price?:number
}

interface ServiceOptions {
    cache?: RequestCache;
    revalidate?: number
}

export interface TutorData {
    name: string,
    bio: string,
    image: string,
    experience_year: number,
    subject: string,
}

export interface UserId{
    userId:string
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

    },

   

    createTutor: async (TutorData:TutorData) => {
        try {
            const cookieStore = await cookies();
            const res = await fetch(`${API_URL}/tutors`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Cookie: cookieStore.toString()
                },
                body: JSON.stringify(TutorData)
            })

            const data = await res.json()
            if(data.error){
                return {
                    data:null,
                    error:{message:data.error || "Error: Post not created."}
                }
            }

            return {data:data, error:null}
        } catch (error) {
            return { data: null, error: { message: "Something went wrong" } }
        }
    }
}