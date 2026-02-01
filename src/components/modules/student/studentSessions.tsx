import { bookingService } from "@/services/booking.service"

export default async function StudentSessions() {

const {data} = await bookingService.getBookings()
console.log(data)

    return (
        <div>
            <h1>This is student session</h1>
        </div>
    )
}