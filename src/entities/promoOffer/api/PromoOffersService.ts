import { SERVER_URL_API } from "@/src/app/env/env"
import { IPromoOfferItem, IPromoOfferCategory, IPromoOfferData } from "../model/types"



class PromoOffersService {

    async getCategories(): Promise<{cooperationTypes: IPromoOfferCategory[], all: number}> {
        const res = await fetch(SERVER_URL_API + '/v1/promo_offers/filter/settings', 
            {
                method: "POST",
                cache: "no-cache"
            }
        )
        const {cooperationTypes, all}: {cooperationTypes: IPromoOfferCategory[], all: number} = await res.json()
        return {cooperationTypes, all}
    }

    async getOffers(cooperationTypeIds: number[]): Promise<IPromoOfferItem[]> {
        const res = await fetch(SERVER_URL_API + '/v1/promo_offers/filter', 
            {
                method: "POST",
                body: JSON.stringify({cooperationTypeIds}),
                headers: {
                    'Content-Type': 'application/json;charset=utf-8',
                },
                cache: "no-cache"
            }
        )
        const {offers}: {offers: IPromoOfferItem[]} = await res.json()
        return offers
    }
    
    async getOffer(offerId: string): Promise<IPromoOfferData> {
        const res = await fetch(SERVER_URL_API + `/v1/promo_offers/offer/${offerId}`, 
            {
                cache: "no-cache"
            }
        )
        const {offer}: {offer: IPromoOfferData} = await res.json()
        return offer
    }
    
}

export const promoOffersService = new PromoOffersService()