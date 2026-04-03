import { FC } from "react";
import classes from './promoOfferLoader.module.scss'
import { LoaderContainer } from "@/src/shared/ui/loaderContainer";


export const PromoOfferLoader: FC = () => {


    return (
        <section className={classes.container}>
            {
                [1, 2].map(i => 
                    <section 
                        key={i} 
                        className={classes.item}
                    >
                        <LoaderContainer />
                    </section>
                )
            }
        </section>
    )
}