import { FC } from "react";
import classes from './banner.module.scss'
import { BannerImg } from "../lib/assets/BannerImg";


export const Banner10: FC = () => {

    return (
        <section className={classes.container}>
            <BannerImg />
        </section>
    )
}