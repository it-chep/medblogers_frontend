import {FC} from "react";
import {IDoctorMiniature} from "@/src/entities/doctor";
import classes from './doctorMiniature.module.scss'
import Image from "next/image";
import tg_logo from '@/src/shared/lib/assets/telegram_logo.png'
import inst_logo from '@/src/shared/lib/assets/Instagram_icon.png'
import IMG from '@/public/user_abdurzakova-alyona-aleksandrovna_photo_2025-06-21_01-10-57.jpg'
import {MyButton} from "@/src/shared/ui/myButton";
import {SubscriberLink} from "@/src/entities/doctor/ui/subscriberLink/SubscriberLink";

export const DoctorMiniature: FC<IDoctorMiniature> = ({
    name, avatar_url, city, doctor_url, inst_url, tg_channel_url, inst_subs_count_text, inst_subs_count, tg_subs_count_text, tg_subs_count, slug, speciality
}) => {

    console.log(avatar_url)

    return (
        <section className={classes.container}>
            <section className={classes.docInfoWraper}>
                <Image src={IMG.src} alt={'Аватарка врача'} width={260} height={160} />
                <section className={classes.docInfo}>
                    <section className={classes.name}><p>{name}</p></section>
                    <section className={classes.userAdditionalInfo}>
                        <p>{speciality}</p>
                        <p>📍 {city}</p>
                    </section>
                </section>
            </section>
            <section className={classes.buttonsWrapper}>
                <section className={classes.subscribersWrapper}>
                    {
                        tg_channel_url
                            &&
                        <SubscriberLink
                            link={tg_channel_url}
                            socialIconSrc={tg_logo.src}
                            subsCount={tg_subs_count}
                            text={tg_subs_count_text}
                        />
                    }
                    {
                        inst_url
                            &&
                        <SubscriberLink
                            link={inst_url}
                            socialIconSrc={inst_logo.src}
                            subsCount={inst_subs_count}
                            text={inst_subs_count_text}
                        />
                    }
                </section>
                <a href={doctor_url} className={classes.link}>
                    <MyButton>Подробнее</MyButton>
                </a>
            </section>
        </section>
    )
}