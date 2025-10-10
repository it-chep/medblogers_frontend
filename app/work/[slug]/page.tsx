import { doctorService, IDoctorSeo } from "@/src/entities/doctor";
import DoctorPage from "@/src/views/doctor/Doctor"
import FreelancerPage from "@/src/views/freelancer/Freelancer";

type TParams = {
    slug: string;
};

// export const dynamicParams = true 

// export async function generateMetadata({ params }: any) {
//     const { slug }: TParams = await params;
//     let seo: IDoctorSeo | null = null;
//     try{
//       seo = await doctorService.seo(slug)
//     }
//     catch(e){}
//     return {
//         title: seo?.title || '',
//         description: seo?.description || '',
//     }
// }

export default async function Freelancer({ params }: any) {

    const { slug }: TParams = await params;

    return (
        <FreelancerPage slug={slug} />
    )
}