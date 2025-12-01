import { doctorService, IDoctorSeo } from "@/src/entities/doctor";
import DoctorPage from "@/src/views/doctor/Doctor"

type TParams = {
    slug: string;
};

export const dynamicParams = true 

export async function generateMetadata({ params }: any) {
    const { slug }: TParams = await params;
    let seo: IDoctorSeo | null = null;
    try{
      seo = await doctorService.seo(slug)
    }
    catch(e){
        console.log(e)
    }
    return {
        title: seo?.title || '',
        description: seo?.description || '',
        openGraph: {
            title: seo?.title || '',
            description: seo?.description || '',
            images: seo?.image || '',
        },
    }
}

export default async function Doctor({ params }: any) {

    const { slug }: TParams = await params;

    const seo = await doctorService.seo(slug)

    return (
        <DoctorPage 
            title={seo.title} 
            slug={slug} 
        />
    )
}