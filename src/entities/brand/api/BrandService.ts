import { SERVER_URL_API } from "@/src/app/env/env"
import { IBrandData, IOfferItemByBrand } from "../model/types"



class BrandService {
    async getBrandByOffer(offerSlug: string): Promise<IBrandData> {  // NEW
        const res = await fetch(SERVER_URL_API + `/v1/promo_offers/brand/by_offer/${offerSlug}`,
            {
                cache: "no-cache"
            }
        )
        const {brand}: {brand: IBrandData} = await res.json()
        return brand
    }

    async getBrand(brandSlug: string): Promise<IBrandData> {
        const res = await fetch(SERVER_URL_API + `/v1/promo_offers/brand/${brandSlug}`, 
            {
                cache: "no-cache"
            }
        )
        const {brand}: {brand: IBrandData} = await res.json()
        return brand
    }

    async getOffers(brandSlug: string): Promise<IOfferItemByBrand[]> {
        const res = await fetch(SERVER_URL_API + `/v1/promo_offers/brand/${brandSlug}/offers`, 
            {
                cache: "no-cache"
            }
        )
        const {offers}: {offers: IOfferItemByBrand[]} = await res.json()
        return offers
    }
}

export const brandService = new BrandService()