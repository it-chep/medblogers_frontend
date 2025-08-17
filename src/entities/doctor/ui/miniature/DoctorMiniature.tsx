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
    name, image, city, instLink, tgLink, instSubsCount, instSubsCountText, tgSubsCount, tgSubsCountText, slug, speciality
}) => {

    return (
        <section className={classes.container}>
            <section className={classes.docInfoWrapper}>
                { image && <Image src={image} alt={'Аватарка врача'} width={260} height={160} /> }
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
                        tgSubsCount
                            &&
                        <SubscriberLink
                            link={tgLink}
                            socialIconSrc={tg_logo.src}
                            subsCount={tgSubsCount}
                            text={tgSubsCountText}
                        />
                    }
                    {
                        instSubsCount
                            &&
                        <SubscriberLink
                            link={instLink}
                            socialIconSrc={inst_logo.src}
                            subsCount={instSubsCount}
                            text={instSubsCountText}
                        />
                    }
                </section>
                <a href={`doctors/${slug}`} className={classes.link}>
                    <MyButton>Подробнее</MyButton>
                </a>
            </section>
        </section>
    )
}