import { IPromoOfferSeo, promoOffersService } from "@/src/entities/promoOffer";
import PromoOfferPage from "@/src/views/promoOffer/PromoOfferPage";

type TParams = {
    slug: string;
};

export const dynamicParams = true 

export async function generateMetadata({ params }: any) {
    const { slug }: TParams = await params;
    let seo: IPromoOfferSeo | null = null;
    try{
        seo = await promoOffersService.getSeo(slug)
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

export default async function PromotionalOffer({params}: any) {

    const { slug }: TParams = await params;

    return (
        <PromoOfferPage slug={slug} />
    )
}