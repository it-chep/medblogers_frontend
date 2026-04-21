import { SERVER_URL_API } from "@/src/app/env/env"
import { fetchServer } from "@/src/shared/api/fetchServer"
import { IBrandData, IBrandSeo, IOfferItemByBrand } from "../model/types"



class BrandService {
    async getBrandByOffer(offerSlug: string): Promise<IBrandData> {  // NEW
        const res = await fetchServer(SERVER_URL_API + `/v1/promo_offers/brand/by_offer/${offerSlug}`,
            {
                cache: "no-cache"
            }
        )
        const {brand}: {brand: IBrandData} = await res.json()
        return brand
    }

    async getBrand(brandSlug: string): Promise<IBrandData> {
        const res = await fetchServer(SERVER_URL_API + `/v1/promo_offers/brand/${brandSlug}`, 
            {
                cache: "no-cache"
            }
        )
        const {brand}: {brand: IBrandData} = await res.json()
        return brand
    }

    async getBrandSeo(brandSlug: string): Promise<IBrandSeo> {
        const res = await fetchServer(SERVER_URL_API + `/v1/brand/seo/${brandSlug}`, 
            {
                cache: "no-cache"
            }
        )
        const data: IBrandSeo = await res.json()
        return data
    }

    async getOffers(brandSlug: string): Promise<IOfferItemByBrand[]> {
        const res = await fetchServer(SERVER_URL_API + `/v1/promo_offers/brand/${brandSlug}/offers`, 
            {
                cache: "no-cache"
            }
        )
        const {offers}: {offers: IOfferItemByBrand[]} = await res.json()
        return offers
    }
}

export const brandService = new BrandService()