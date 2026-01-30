"use server"

import { TutorData, tutorService } from "@/services/tutor.service"
import { updateTag } from "next/cache";

export const createTutor = async(data:TutorData)=>{
    const res = await tutorService.createTutor(data);
    updateTag("tutorUpdate")
    return res
}