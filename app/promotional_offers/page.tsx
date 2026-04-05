import PromoOffersPage from "@/src/views/promoOffers/PromoOffersPage";

export default async function PromotionalOffers(props: any) {

    const params = await props.searchParams
    const searchParams = new URLSearchParams(params)
    const ids = searchParams.get('coop_type')

    return (
        <PromoOffersPage ids={ids?.split(',').map(id => +id) || []} />
    )
}