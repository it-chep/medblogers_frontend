import { isDynamicServerError } from "next/dist/client/components/hooks-server-context";
import classes from './promoOffers.module.scss'
import { notFound } from "next/navigation";
import { IPromoOfferItem, PromoOfferItem, promoOffersService } from "@/src/entities/promoOffer";

interface IProps {
    ids: number[];
}

const getData = async (ids: number[]) => {
    let offers: IPromoOfferItem[] | null = null;
    try{
        offers = await promoOffersService.getOffers(ids)
    }
    catch(e){
        if (isDynamicServerError(e)) {
            throw e;
        }
        console.log(e)
    }
    return offers
}

export default async function({ids}: IProps) {

    const offers = await getData(ids)

    if(!offers){
        return (
            notFound()
        )
    }

    return (
        <section className={classes.container}>
            {offers.map(offer => 
                <PromoOfferItem
                    key={offer.title}
                    promoOffer={offer}
                />
            )}
        </section>
    )
}