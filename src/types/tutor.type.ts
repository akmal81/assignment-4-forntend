export interface Tutor {
    id: string |number
    bio: string
    image?: string | null
    hourly_rate: number
    experience_year: number
    average_rating: number
    subject: string
    isFeatured?: boolean
    category:{
        name:string
    }
    user:{
        name:string
    }
}