import { FC } from "react";
import classes from './bannerVip.module.scss'
import { SvgBannerMobile } from "./ImgBanner.tsx/SvgBannerMobile";

export const BannerVipMobile: FC = () => {

    return (
        <section className={classes.containerMobile}>
            <SvgBannerMobile />
        </section>
    )
}