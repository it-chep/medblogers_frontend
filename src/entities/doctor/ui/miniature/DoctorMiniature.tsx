import React, {FC} from "react";
import {IDoctorMiniature} from "@/src/entities/doctor";
import classes from './doctorMiniature.module.scss'
import Image from "next/image";
import tg_logo from '@/src/shared/lib/assets/telegram_logo_nobackground.png'
import inst_logo from '@/src/shared/lib/assets/Instagram_icon.png'
import youtube_logo from '@/src/shared/lib/assets/Youtube_logo.png'
import vk_logo from '@/src/shared/lib/assets/vk_logo.png'
import {MyButton} from "@/src/shared/ui/myButton";
import {SubscriberLink} from "@/src/entities/doctor/ui/subscriberLink/SubscriberLink";
import Link from "next/link";
import {ClinicHint} from "../clinicHint/ClinicHint";

interface IProps {
    doctor: IDoctorMiniature;
    setCitiesSearch: React.ReactElement;
    setSpecialitiesSearch: React.ReactElement;
}

export const DoctorMiniature: FC<IProps> = ({
    doctor, setCitiesSearch, setSpecialitiesSearch
}) => {

    const doctorLink = `doctors/${doctor.slug}`

    const fio = doctor.name.split(' ')

    return (
        <Link
            className={classes.container}
            href={doctorLink}
        >
            <section className={classes.header}>
                {
                    doctor.image
                        &&
                    <Image
                        className={classes.avatar}
                        src={doctor.image}
                        alt={'Аватарка врача'}
                        width={260}
                        height={160}
                    />
                }
                <section className={classes.name}>
                    {
                        doctor.isKfDoctor
                            ?
                        <>
                            {fio.slice(0, -1).join(' ')}&nbsp;
                            <ClinicHint name={fio[2]}/>
                        </>
                        :
                        <>
                            {doctor.name}
                        </>
                    }
                </section>
            </section>
            <section className={classes.infoWrapper}>
                <section className={classes.info}>
                    {setSpecialitiesSearch}
                    {setCitiesSearch}
                </section>
                <section className={classes.buttonsWrapper}>
                    {
                        (doctor.tgSubsCount || doctor.instSubsCount || doctor.youtubeSubsCount || doctor.vkSubsCount)
                            &&
                        <>
                            <section className={classes.sign}>
                                Количество подписчиков в соц. сетях:
                            </section>
                            <section className={classes.subscribersWrapper}>
                                {
                                    doctor.tgSubsCount
                                        &&
                                    <SubscriberLink
                                        link={doctor.tgLink}
                                        socialIconSrc={tg_logo.src}
                                        subsCount={doctor.tgSubsCount}
                                        text={''}
                                        useA={false} // убираем вложенность тега a
                                        fontSize={14}
                                    />
                                }
                                {
                                    doctor.instSubsCount
                                        &&
                                    <SubscriberLink
                                        link={doctor.instLink}
                                        socialIconSrc={inst_logo.src}
                                        subsCount={doctor.instSubsCount}
                                        text={''}
                                        useA={false}
                                        fontSize={14}
                                    />
                                }
                                {
                                    doctor.youtubeSubsCount
                                        &&
                                    <SubscriberLink
                                        link={doctor.youtubeLink}
                                        socialIconSrc={youtube_logo.src}
                                        subsCount={doctor.youtubeSubsCount}
                                        text={''}
                                        useA={false}
                                        fontSize={14}
                                    />
                                }
                                {
                                    doctor.vkSubsCount
                                        &&
                                    <SubscriberLink
                                        link={doctor.vkLink}
                                        socialIconSrc={vk_logo.src}
                                        subsCount={doctor.vkSubsCount}
                                        text={''}
                                        useA={false}
                                        fontSize={14}
                                    />
                                }
                            </section>
                            </>
                        }
                    <section className={classes.link}>
                        <MyButton>
                            Подробнее
                        </MyButton>
                    </section>
                </section>
            </section>
        </Link>
    )
}