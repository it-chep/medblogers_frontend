import { OfferBadge } from "@/src/shared/ui/badgeOffer";
import { FC, Suspense } from "react";
import classes from './offers.module.scss'
import OffersByBrand from "../offers/OffersByBrand";
import { OffersItemsLoader } from "@/src/entities/brand";

interface IProps {
    slug: string;
}

export const OffersByBrandWidget: FC<IProps> = ({slug}) => {

    return (
        <section className={classes.container}>
            <OfferBadge
                value="Офферы"    
                border        
                bgColor="var(--light-black)"
            />
            <Suspense
                fallback={
                    <OffersItemsLoader />
                }
            >
                <OffersByBrand 
                    slug={slug}
                />
            </Suspense>
        </section>
    )
}
