import { ProductDetail1 } from "@/components/modules/landingPage/product-detail1"
import { tutorService } from "@/services/tutor.service"
// import { Tutor } from "@/types";



// export async function generateStaticParams() {
//     const { data } = await tutorService.getTutor();
   
//     return data?.data?.map((tutor: Tutor) => ({ id: tutor.id })).splice(0, 3);
// }


export default async function SingleTutor(
    {
        params
    }:{
        params:Promise<{id:string}>
    }
) {
    const {id} = await params
    const {data} = await tutorService.getTutorById(id)
  
    return (
        <div>
            <ProductDetail1 data={data}></ProductDetail1>
        </div>
    )
}