import React, {FC, PropsWithChildren} from "react";
import classes from './cardMiniature.module.scss'
import {MyButton} from "@/src/shared/ui/myButton";
import { IDoctor, IDoctorVip } from "../../model/types";
import Image from "next/image";
import markImg from '@/src/shared/lib/assets/mark_blue.png'
import { SpecialityBadge } from "../specialityBadges/SpecialityBadge";
import { VipSvg } from "@/src/shared/lib/assets/VipSvg";
import { VipStatuses } from "../vipStatus/VipStatuses";
import { Quote } from "../quote/Quote";

interface IProps {
    doctor: IDoctor;
    doctorVip: IDoctorVip | null;
}

export const DoctorCardMiniature: FC<IProps & PropsWithChildren> = ({doctor, doctorVip, children}) => {

    return (
        <section className={classes.container + (doctorVip ? ` ${classes.vip}` : '')}>
            <section className={classes.imageBox}>
                <img 
                    className={classes.avatar}
                    src={doctor.image}
                    alt="Фото врача" 
                />
                {
                    doctorVip
                        &&
                    <section className={classes.vipSvg}>
                        <VipSvg />
                    </section>
                }
            </section>
            <section className={classes.content}>
                {
                    doctorVip
                        &&
                    <section className={classes.statuses}>
                        <VipStatuses doctorVip={doctorVip} />
                    </section>
                }
                <section className={classes.name}>
                    {
                        doctor.isKfDoctor
                            ?
                        children
                            :
                        <>
                            {doctor.name}
                        </>
                    }
                </section>
                <section className={classes.city_specialities}>
                    <section className={classes.city}>
                        <Image alt="Метка" width={13} height={16} src={markImg.src} /> 
                        Город: {doctor.mainCity.name}{doctor.cities.length >= 0 && doctor.cities.map(city => `, ${city.name}`)}
                    </section>
                    <section className={classes.specialities}>
                        <SpecialityBadge 
                            vip={Boolean(doctorVip)} 
                            id={doctor.mainSpeciality.id} 
                            text={doctor.mainSpeciality.name} 
                            main={true} 
                        />
                        {doctor.specialities.map((speciality, ind) => 
                            <SpecialityBadge 
                                key={ind} 
                                id={speciality.id} 
                                vip={Boolean(doctorVip)} 
                                text={speciality.name} 
                            />
                        )}
                    </section>
                </section>
                <section className={classes.theme}>
                    <span className={classes.themeSign}>Тематика блога: </span>{doctor.mainBlogTheme}
                </section>
                {
                    doctorVip
                        &&
                    <section className={classes.shortMessage}>
                        <Quote 
                            text={doctorVip.shortMessage}
                        />
                    </section>
                }
                <a 
                    href={doctor.tgUrl} 
                    className={classes.link}
                    target="_blank"
                >
                    <MyButton>
                        Написать в Telegram
                    </MyButton>
                </a>
            </section>
        </section>
    )
}