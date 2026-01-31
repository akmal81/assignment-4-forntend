


import CreateTutor from "@/components/modules/tutor/CreateTutor";
import TutorProfile from "@/components/modules/tutor/TutorProfile";
import { tutorService } from "@/services/tutor.service";
import { userService } from "@/services/user.service";



export default async function CreateTutorProfile() {
    const { data } = await userService.getSession();
    // console.log(data.user.id)
    const { data: tutor } = await tutorService.getTutor(data.user.id);
    //  console.log(tutor)
    return (
        <div>
            {tutor && tutor?
            
            <TutorProfile tutor={tutor}></TutorProfile>
            :
        
            <CreateTutor tutor={tutor}></CreateTutor>
        }

        </div>
    )
}