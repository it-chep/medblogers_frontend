import { FC } from "react";
import classes from './doctorCard.module.scss'
import { IDoctor } from "../../model/types";
import Image from "next/image";
import { Socials } from "../cardSocials/Socials";

import IMG from '@/public/user_borisova-Love-Petrovna_2.jpg'
import { CardData } from "../cardData/CardData";

interface IProps{
    doctor: IDoctor;
}

export const DoctorCard: FC<IProps> = ({doctor}) => {
    
    console.log(doctor)

    return (
        <section className={classes.wrapper}>
            {
                IMG
                    &&
                <Image 
                    className={classes.avatar} 
                    // src={doctor.image} 
                    src={IMG.src}
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