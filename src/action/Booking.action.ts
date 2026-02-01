"use server"


import { bookingService } from "@/services/booking.service";
import { BookingData } from "@/types";
import { updateTag } from "next/cache";

export const createBooking = async(bookingData:BookingData)=>{
    const res = await bookingService.createBooking(bookingData);
    updateTag("createBooking")
    return res
}