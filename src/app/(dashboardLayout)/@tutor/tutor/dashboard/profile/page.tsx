
import TutorProfile from "@/components/modules/tutor/CreateTutorProfile";
import { tutorService } from "@/services/tutor.service";
import { userService } from "@/services/user.service";



export default async function CreateTutorProfile() {
    const  {data} = await userService.getSession();
// console.log(data.user.id)
    const {data:tutor} = await tutorService.getTutor(data.user.id);
//  console.log(tutor)
    return(
        <div>
            <TutorProfile tutor={tutor}/>
        </div>
    )
}