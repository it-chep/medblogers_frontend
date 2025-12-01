import { freelancerService, IFreelancerSeo } from "@/src/entities/freelancer";
import FreelancerPage from "@/src/views/freelancer/Freelancer";

type TParams = {
    slug: string;
};

export const dynamicParams = true 

export async function generateMetadata({ params }: any) {
    const { slug }: TParams = await params;
    let seo: IFreelancerSeo | null = null;
    try{
        seo = await freelancerService.seo(slug)
    }
    catch(e){
        console.log(e)
    }
    return {
        title: seo?.title || 'Помогаю врачам-блогерам',
        description: seo?.description || 'Профессиональный помощник для ведения медицинского блога',
        openGraph: {
            title: seo?.title || 'Помогаю врачам-блогерам',
            description: seo?.description || 'Профессиональный помощник для ведения медицинского блога',
            images: seo?.image || '',
        },
    };
}

export default async function Freelancer({ params }: any) {

    const { slug }: TParams = await params;

    const seo = await freelancerService.seo(slug)

    return (
        <FreelancerPage 
            title={seo.title}    
            slug={slug} 
        />
    )
}