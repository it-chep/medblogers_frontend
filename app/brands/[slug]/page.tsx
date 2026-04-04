import { brandService, IBrandSeo } from "@/src/entities/brand";
import BrandPage from "@/src/views/brand/BrandPage";

type TParams = {
    slug: string;
};

export async function generateMetadata({params}: any) {
    const { slug }: TParams = await params;
    let seo: IBrandSeo | null = null;
    try{
        seo = await brandService.getBrandSeo(slug)
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
    };
}

export default async function Brand({params}: any) {

    const { slug }: TParams = await params;

    const seo = await brandService.getBrandSeo(slug)

    return (
        <BrandPage 
            slug={slug} 
            title={seo.title} 
        />
    )
}