import { getSession } from "@/action/user.actions"
import StudentSessions from "@/components/modules/student/studentSessions"

export default async function MySession() {

    const {data} = await getSession()
    console.log(data)
    return(
        <div>
            <StudentSessions></StudentSessions>
        </div>
    )
}