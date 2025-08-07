import { FC } from "react";
import classes from './bannerNewDoctor.module.scss'
import img from '../../lib/assets/footer_action.png'
import imgMobile from '../../lib/assets/footer_mobile_action.png'
import { MyButton } from "@/src/shared/ui/myButton";
import Link from "next/link";

export const BannerNewDoctor: FC = () => {



    return (
        <section className={classes.container}>
            <span className={classes.sign}>
                Ознакомьтесь с правилами и заполните анкету чтобы ваша карточка появилась на нашем сайте
            </span>
            <img className={classes.img + ` ${classes.desc}`} src={img.src} />
            <img className={classes.img + ` ${classes.mobile}`} src={imgMobile.src} />
            <Link className={classes.button} href="/welcome">
                <MyButton>
                    Подать заявку
                </MyButton>
            </Link>
        </section>
    )
}