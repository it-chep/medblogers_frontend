import React, { FC, PropsWithChildren } from "react";
import classes from './doctorCard.module.scss'
import { IDoctor, IDoctorVip } from "../../model/types";
import { Socials } from "../cardSocials/Socials";
import { CardData } from "../cardData/CardData";

interface IProps{
    doctor: IDoctor;
    doctorVip: IDoctorVip | null;
}

export const DoctorCard: FC<IProps & PropsWithChildren> = ({doctor, doctorVip, children}) => {
    
    return (
        <section className={classes.content + (doctorVip ? ` ${classes.vip}` : '')}>
            <CardData 
                doctor={doctor} 
                doctorVip={doctorVip}    
            />
            <Socials 
                doctor={doctor}
                vip={Boolean(doctorVip)}
            >
                {children}
            </Socials>
        </section>
    )
}