import { isDynamicServerError } from "next/dist/client/components/hooks-server-context";
import { notFound } from "next/navigation";
import { BrandCard, brandService, IBrandData } from "@/src/entities/brand";

interface IProps {
    byOffer?: boolean;
    slug: string;
}

const getData = async (slug: string, byOffer?: boolean) => {
    let brand: IBrandData | null = null;
    try{
        if(byOffer) {
            brand = await brandService.getBrandByOffer(slug)       
        }
        else{
            brand = await brandService.getBrand(slug)       
        }
    }
    catch(e){
        if (isDynamicServerError(e)) {
            throw e;
        }
        console.log(e)
    }
    return brand
}

export default async function({slug, byOffer}: IProps) {

    const brand = await getData(slug, byOffer)

    if(!brand){
        return (
            notFound()
        )
    }

    return (
        <BrandCard brand={brand} byOffer={byOffer} />
    )
}