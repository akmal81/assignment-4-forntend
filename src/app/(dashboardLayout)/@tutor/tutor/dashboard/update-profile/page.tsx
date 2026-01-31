import UpdateTutor from "@/components/modules/tutor/UpdateTutor";
import { tutorService } from "@/services/tutor.service";
import { userService } from "@/services/user.service";
export default async function UpdateProfilePage() {
const  {data} = await userService.getSession();
    const {data:tutor} = await tutorService.getTutor(data.user.id);
    return (
        <div>
           <UpdateTutor tutor={tutor}></UpdateTutor>
        </div>
    )
}  