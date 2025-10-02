import { FC } from "react";
import classes from './bannerNewFreelancer.module.scss'
import Link from "next/link";
import { MyButton } from "@/src/shared/ui/myButton";
import Image from "next/image";
import dImf from '../lib/assets/designer.png'
import mImf from '../lib/assets/marketing.png'


export const BannerNewFreelancer: FC = () => {


    return (
        <section className={classes.container}>  
            <section className={classes.header}>РАЗМЕЩЕНИЕ НА САЙТЕ</section>
            <Link href={'/welcome_freelancer'}>
                <MyButton>
                    Подать заявку
                </MyButton>
            </Link>
        </section>
    )
}