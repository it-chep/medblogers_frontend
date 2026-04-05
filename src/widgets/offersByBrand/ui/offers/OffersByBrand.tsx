import { brandService, IOfferItemByBrand, OfferItemByBrand } from "@/src/entities/brand";
import { isDynamicServerError } from "next/dist/client/components/hooks-server-context";
import classes from './offersByBrand.module.scss'
import { notFound } from "next/navigation";

interface IProps {
    slug: string;
}

const getData = async (slug: string) => {
    let offers: IOfferItemByBrand[] | null = null;
    try{
        offers = await brandService.getOffers(slug)
    }
    catch(e){
        if (isDynamicServerError(e)) {
            throw e;
        }
        console.log(e)
    }
    return offers
}

export default async function({slug}: IProps) {

    const offers = await getData(slug)

    if(!offers){
        return (
            notFound()
        )
    }

    return (
        <section className={classes.container}>
            {offers.map(offer => 
                <OfferItemByBrand   
                    key={offer.id}
                    offer={offer} 
                />
            )}
        </section>
    )
}