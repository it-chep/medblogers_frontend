import PromoOfferPage from "@/src/views/promoOffer/PromoOfferPage";

type TParams = {
    slug: string;
};

export default async function PromotionalOffer({params}: any) {

    const { slug }: TParams = await params;

    return (
        <PromoOfferPage slug={slug} />
    )
}