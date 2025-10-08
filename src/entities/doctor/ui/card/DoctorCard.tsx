import { FC, PropsWithChildren } from "react";
import classes from './doctorCard.module.scss'
import { IDoctor } from "../../model/types";
import { Socials } from "../cardSocials/Socials";
import { CardData } from "../cardData/CardData";

interface IProps{
    doctor: IDoctor;
}

export const DoctorCard: FC<IProps & PropsWithChildren> = ({doctor, children}) => {
    

    return (
        <section className={classes.wrapper}>
            {
                <img 
                    className={classes.avatar} 
                    src={doctor.image} 
                    height={300} 
                    width={300} 
                    alt="Фото врача" 
                />
            }
            <section className={classes.content}>
                <CardData doctor={doctor} />
                <Socials doctor={doctor}>
                    {children}
                </Socials>
            </section>
        </section>
    )
}