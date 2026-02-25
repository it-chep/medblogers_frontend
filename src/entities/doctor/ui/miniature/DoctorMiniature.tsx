import React, {FC} from "react";
import {IDoctorMiniature} from "@/src/entities/doctor";
import classes from './doctorMiniature.module.scss'
import Image from "next/image";
import {MyButton} from "@/src/shared/ui/myButton";
import Link from "next/link";
import {ClinicHint} from "../../../../features/clinicHint/ui/ClinicHint";
import { SubscriberLinkBadges } from "../SubscriberLinkBadges/SubscriberLinkBadges";
import { VipStatuses } from "../vipStatus/VipStatuses";
import { VipSvg } from "@/src/shared/lib/assets/SvgVip";

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

    console.log(doctor)

    return (
        <Link
            className={classes.container + (doctor.isVip ? ` ${classes.vip}` : '')}
            href={doctorLink}
        >
            <section className={classes.header}>
                {
                    doctor.image
                        &&
                    <section className={classes.imageBox}>
                        <Image
                            className={classes.avatar}
                            src={doctor.image}
                            alt={'Аватарка врача'}
                            width={260}
                            height={160}
                        />
                        {
                            doctor.isVip
                                &&
                            <section className={classes.vipSvg}>
                                <VipSvg />
                            </section>
                        }
                    </section>
                }
                {
                    doctor.isVip
                        &&
                    <VipStatuses 
                        miniature 
                        doctorVip={
                            {canBarter: true, canBuyAdvertising: true, canSellAdvertising: true}
                        } 
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
                        <SubscriberLinkBadges doctorLinks={doctor} vip={doctor.isVip} /> 
                    }
                    <section className={classes.link}>
                        <MyButton
                            turquoise={doctor.isVip}
                        >
                            Подробнее
                        </MyButton>
                    </section>
                </section>
            </section>
        </Link>
    )
}