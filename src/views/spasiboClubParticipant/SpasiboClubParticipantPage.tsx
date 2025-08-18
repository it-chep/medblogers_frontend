import { FC } from "react";
import classes from './spasiboClubParticipantPage.module.scss'
import aboutImg from '@/src/shared/lib/assets/dog_about.png'
import Image from "next/image";




export default function SpasiboClubParticipantPage() {


    return (
        <main className={classes.wrapper}>
            <Image className={classes.aboutImg} src={aboutImg.src} height={125} width={500} alt="Напиши здесь о себе" />
            <section className={classes.header}>
                <h1>Анкета отправлена на модерацию</h1>
                <section className={classes.desc}>
                    <p>А пока идет модерация, можете направить свою фотографию</p>
                    <a target="_blank" href="https://t.me/readydog">@readydog</a>
                </section>
            </section>
        </main>
    )
}