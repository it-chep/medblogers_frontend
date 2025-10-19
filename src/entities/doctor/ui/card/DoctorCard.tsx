import React, { FC, PropsWithChildren } from "react";
import classes from './doctorCard.module.scss'
import { IDoctor } from "../../model/types";
import { Socials } from "../cardSocials/Socials";
import { CardData } from "../cardData/CardData";

interface IProps{
    doctor: IDoctor;
    image: React.ReactNode;
}

export const DoctorCard: FC<IProps & PropsWithChildren> = ({doctor, image, children}) => {
    

    return (
        <section className={classes.wrapper}>
            {image}
            <section className={classes.content}>
                <CardData doctor={doctor} />
                <Socials doctor={doctor}>
                    {children}
                </Socials>
            </section>
        </section>
    )
}