import { FC } from "react";
import classes from './doctorCard.module.scss'
import { IDoctor } from "../../model/types";
import Image from "next/image";
import { Socials } from "../cardSocials/Socials";

import { CardData } from "../cardData/CardData";

interface IProps{
    doctor: IDoctor;
}

export const DoctorCard: FC<IProps> = ({doctor}) => {
    
    return (
        <section className={classes.wrapper}>
            {
                <Image 
                    className={classes.avatar} 
                    src={doctor.image} 
                    height={300} 
                    width={300} 
                    alt="Фото врача" 
                />
            }
            <section className={classes.content}>
                <CardData doctor={doctor} />
                <Socials doctor={doctor} />
            </section>
        </section>
    )
}