"use server"

import { tutorService } from "@/services/tutor.service";
import { AddTimeData } from "@/types";
import { updateTag } from "next/cache";



export const addTimeSlot = async(data:AddTimeData)=>{
    const res = await tutorService.addTimeSlot(data);
    updateTag("tutorUpdate")
    return res
}