import { FC } from "react";
import { SvgBanner } from "./ImgBanner.tsx/SvgBanner";
import classes from './bannerVip.module.scss'

export const BannerVip: FC = () => {

    return (
        <section className={classes.container}>
            <SvgBanner />
        </section>
    )
}