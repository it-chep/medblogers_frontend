import {FC} from "react";
import {IDoctorMiniature} from "@/src/entities/doctor";
import classes from './doctorMiniature.module.scss'
import Image from "next/image";
import tg_logo from '@/src/shared/lib/assets/telegram_logo_nobackground.png'
import inst_logo from '@/src/shared/lib/assets/Instagram_icon.png'
import {MyButton} from "@/src/shared/ui/myButton";
import {SubscriberLink} from "@/src/entities/doctor/ui/subscriberLink/SubscriberLink";
import Link from "next/link";
import markImg from '@/src/shared/lib/assets/mark_blue.png'

export const DoctorMiniature: FC<IDoctorMiniature> = ({
    name, image, city, instLink, tgLink, instSubsCount, instSubsCountText, tgSubsCount, tgSubsCountText, slug, speciality
}) => {

    const doctorLink = `doctors/${slug}`

    return (
        <section className={classes.container}>
            <section className={classes.header}>
                { 
                    image 
                        && 
                    <noindex>
                        <Link rel="nofollow" href={doctorLink}>
                            <Image src={image} alt={'Аватарка врача'} width={260} height={160} />
                        </Link>
                    </noindex> 
                }
                <section className={classes.name}>
                    <Link href={doctorLink}>
                        {name}
                    </Link>
                </section>
            </section>
            <section className={classes.infoWrapper}>
                <section className={classes.info}>
                    <p className={classes.speciality}>{speciality}</p>
                    <p className={classes.city}>
                        <Image alt="Метка" width={11} height={13} src={markImg.src} />
                        {city}
                    </p>
                </section>
                <section className={classes.buttonsWrapper}>
                    {
                        (tgSubsCount || instSubsCount)
                            &&
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
                    }
                    <noindex className={classes.link}>
                        <Link rel="nofollow" href={doctorLink} >
                            <MyButton>Подробнее</MyButton>
                        </Link>
                    </noindex>
                </section>
            </section>
        </section>
    )
}