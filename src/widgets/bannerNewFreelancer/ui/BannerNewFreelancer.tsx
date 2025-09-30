import { FC } from "react";
import classes from './bannerNewFreelancer.module.scss'
import Link from "next/link";
import { MyButton } from "@/src/shared/ui/myButton";
import Image from "next/image";
import dImf from '../lib/assets/designer.png'
import mImf from '../lib/assets/marketing.png'


export const BannerNewFreelancer: FC = () => {


    return (
        <Link href={'welcome_freelancer'} className={classes.container}>  
            <Image className={classes.designer} src={dImf.src} alt="Дизайнер" height={44} width={132} />
            <Image className={classes.marketing} src={mImf.src} alt="Маркетолог" height={44} width={134} />
            <section className={classes.header}>ОСТАВЬТЕ ЗАЯВКУ ДЛЯ РАЗМЕЩЕНИЯ НА САЙТЕ</section>
            {/* <Link href={'/welcome'}>
                <MyButton>
                    Подать заявку
                </MyButton>
            </Link> */}
        </Link>
    )
}