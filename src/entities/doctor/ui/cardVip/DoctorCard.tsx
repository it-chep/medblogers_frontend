import React, { FC, PropsWithChildren } from "react";
import classes from './doctorCard.module.scss'
import { IDoctor, IDoctorVip } from "../../model/types";
import { Socials } from "../cardSocials/Socials";
import { CardDataVip } from "../cardDataVip/CardDataVip";
import { CardData } from "../cardData/CardData";

interface IProps{
    doctor: IDoctor;
    doctorVip: IDoctorVip | null;
}

export const DoctorCard: FC<IProps & PropsWithChildren> = ({doctor, doctorVip, children}) => {
    
    return (
        <section className={classes.content + (doctorVip ? ` ${classes.vip}` : '')}>
            {
                Boolean(doctorVip)
                    ?
                <CardDataVip 
                    doctor={doctor} 
                    doctorVip={doctorVip}    
                />
                    :
                <CardData 
                    doctor={doctor} 
                />
            }
            <Socials 
                doctor={doctor}
                vip={Boolean(doctorVip)}
            >
                {children}
            </Socials>
        </section>
    )
}