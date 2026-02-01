import { env } from "@/env";
import { BookingData } from "@/types";
import { cookies } from "next/headers";

const API_URL = env.API_URL

export const bookingService ={
     createBooking: async (bookingData:BookingData) => {
            try {
                const cookieStore = await cookies();
                const res = await fetch(`${API_URL}/bookings`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Cookie: cookieStore.toString()
                    },
                    body: JSON.stringify(bookingData)
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
        },
}