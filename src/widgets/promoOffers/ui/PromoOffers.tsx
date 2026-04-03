import { isDynamicServerError } from "next/dist/client/components/hooks-server-context";
import classes from './promoOffers.module.scss'
import { notFound } from "next/navigation";
import { SocialNetwork } from "@/src/entities/freelancer";
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
                >
                    <SocialNetwork 
                        label=""
                        socialNetwork={offer.socialNetworks.map(social => ({...social, id: String(social.id)}))} 
                    />
                </PromoOfferItem>
            )}
        </section>
    )
}