import classes from './promoOffer.module.scss'
import { OfferBadge } from "@/src/shared/ui/badgeOffer";
import { FC, Suspense } from "react";
import PromoOfferData from "../card/PromoOfferData";
import { LoaderContainer } from "@/src/shared/ui/loaderContainer";

interface IProps {
    slug: string;
}

export const PromoOfferDataWidget: FC<IProps> = ({slug}) => {

    return (
        <section className={classes.container}>
            <OfferBadge
                value="Оффер"    
                border        
                bgColor="var(--light-black)"
            />
           <Suspense 
                fallback={
                    <section className={classes.loader}>
                        <LoaderContainer />
                    </section>
                }
            >
                <PromoOfferData 
                    slug={slug} 
                />
            </Suspense>
        </section>
    )
}