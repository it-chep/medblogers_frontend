import { FC } from "react";
import classes from './bannerVip.module.scss'
import { SvgBannerMobile } from "./ImgBanner.tsx/SvgBannerMobile";
import Link from "next/link";

export const BannerVipMobile: FC = () => {

    return (
        <Link href={'/blogs/vip_card'} className={classes.containerMobile}>
            <SvgBannerMobile />
        </Link>
    )
}