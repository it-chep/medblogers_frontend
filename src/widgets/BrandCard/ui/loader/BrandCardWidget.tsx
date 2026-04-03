import { FC, Suspense } from "react";
import classes from './cardWidget.module.scss'
import { OfferBadge } from "@/src/shared/ui/badgeOffer";
import BrandCard from "../card/BrandCard";
import { LoaderContainer } from "@/src/shared/ui/loaderContainer";

interface IProps {
    byOffer?: boolean;
    slug: string;
}

export const BrandCardWidget: FC<IProps> = ({slug, byOffer}) => {

    return (
        <section className={classes.container}>
            <OfferBadge
                value="Информация о бренде"    
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
                <BrandCard 
                    slug={slug} 
                    byOffer={byOffer} 
                />
            </Suspense>
        </section>
    )
}