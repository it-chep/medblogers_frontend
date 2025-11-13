"use client"

import { FC } from "react";
import classes from './bannerNewClient.module.scss'
import img from '../../lib/assets/footer_action.png'
import imgMobile from '../../lib/assets/footer_mobile_action.png'
import { MyButton } from "@/src/shared/ui/myButton";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const BannerNewClient: FC = () => {

    const pathname = usePathname()
    const isFreelancer = pathname.includes('helpers') || pathname.includes('freelancer')

    return (
        <section className={classes.container}>
            <span className={classes.sign}>
                Ознакомьтесь с правилами и заполните анкету чтобы ваша карточка появилась на нашем сайте
            </span>
            <img className={classes.img + ` ${classes.desc}`} src={img.src} alt="" />
            <img className={classes.img + ` ${classes.mobile}`} src={imgMobile.src} alt="" />
            <Link className={classes.button} href={isFreelancer ? '/welcome_freelancer' : '/welcome'}>
                <MyButton>
                    Подать заявку
                </MyButton>
            </Link>
        </section>
    )
}