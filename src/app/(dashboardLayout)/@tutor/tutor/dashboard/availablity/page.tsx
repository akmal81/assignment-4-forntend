import AddAvailablityTime from "@/components/modules/tutor/AddAvailablityTme";
import { userService } from "@/services/user.service";

export default async function AddAvailablity() {

    const { data } = await userService.getSession();
    return(
        <div>
           <AddAvailablityTime ></AddAvailablityTime>
        </div>
    )
}