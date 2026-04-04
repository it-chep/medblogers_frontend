import { isDynamicServerError } from "next/dist/client/components/hooks-server-context";
import { notFound } from "next/navigation";
import { IPromoOfferData, PromoOfferCard, promoOffersService } from "@/src/entities/promoOffer";

interface IProps {
    slug: string;
}

const getData = async (slug: string) => {
    let offer: IPromoOfferData | null = null;
    try{
        offer = await promoOffersService.getOffer(slug)
    }
    catch(e){
        if (isDynamicServerError(e)) {
            throw e;
        }
        console.log(e)
    }
    return offer
}

export default async function({slug}: IProps) {

    const offer = await getData(slug)

    if(!offer){
        return (
            notFound()
        )
    }

    return (
        <PromoOfferCard slug={slug} offer={offer} />
    )
}