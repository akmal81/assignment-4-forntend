export interface Tutor {
    id: string 
    name: string
    bio: string
    image?: string | null
    hourly_rate: number
    experience_year: number
    average_rating: number
    subject: string
    isFeatured?: boolean
    category: {
        name: string
    }
    availabilitySlots: [
        {
            id:string
            date: Date
            startTime: Date
            endTime: Date
            isBooked: Boolean
        }
    ]

}