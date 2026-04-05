import { FC } from "react";
import classes from './offers.module.scss'
import { LoaderContainer } from "@/src/shared/ui/loaderContainer";


export const OffersItemsLoader: FC = () => {

    return (
        <section className={classes.container}>
            {
                [1, 2].map(i => 
                    <section key={i} className={classes.item}>
                        <LoaderContainer />
                    </section>
                )
            }
        </section>
    )
}