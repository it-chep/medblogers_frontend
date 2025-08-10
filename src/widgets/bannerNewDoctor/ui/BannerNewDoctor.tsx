import { FC } from "react";
import classes from './bannerNewDoctor.module.scss'
import Link from "next/link";
import { MyButton } from "@/src/shared/ui/myButton";



export const BannerNewDoctor: FC = () => {



    return (
        <section className={classes.container}>  
            <section className={classes.header}>РАЗМЕЩЕНИЕ НА САЙТЕ</section>
            <Link href={'/welcome'}>
                <MyButton>
                    Подать заявку
                </MyButton>
            </Link>
        </section>
    )
}