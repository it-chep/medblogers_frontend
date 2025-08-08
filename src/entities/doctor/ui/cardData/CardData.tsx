import { FC, PropsWithChildren } from "react";
import classes from './cardData.module.scss'
import { IDoctor } from "../../model/types";
import { CityBadge } from "../citiesBadges/CityBadge";
import Link from "next/link";
import { MyButton } from "@/src/shared/ui/myButton";


interface IProps {
    doctor: IDoctor;
}

export const CardData: FC<IProps & PropsWithChildren> = ({doctor, children}) => {



    return (
        <section className={classes.container}>
            <section className={classes.main}>
                <h1 className={classes.name}>{doctor.name}</h1>
                <span className={classes.city}>Город: {doctor.mainCity.name}</span>
                <section className={classes.specialities}>
                    <CityBadge text={doctor.mainSpeciality.name} main={true} />
                    {doctor.specialities.map((speciality, ind) => 
                        <CityBadge key={ind} text={speciality.name} />
                    )}
                </section>
            </section>

            <section className={classes.blogTheme}>
                <span className={classes.sign}>Тематика блога:</span> {doctor.mainBlogTheme}
            </section>

            <Link className={classes.link} href={'https://t.me/doc13sofi'}>
                <MyButton>
                    Связаться
                </MyButton>
            </Link>
        </section>
    )
}