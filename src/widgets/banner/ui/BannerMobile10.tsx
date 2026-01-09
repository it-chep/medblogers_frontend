import { FC } from "react";
import classes from './banner.module.scss'
import { BannerMobileImg } from "../lib/assets/BannerMobileImg";

export const BannerMobile10: FC = () => {

    return (
        <section className={classes.containerMobile}>
            <BannerMobileImg />
        </section>
    )
}