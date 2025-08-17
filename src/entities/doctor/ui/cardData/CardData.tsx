import { FC, PropsWithChildren } from "react";
import classes from './cardData.module.scss'
import { IDoctor } from "../../model/types";
import Link from "next/link";
import { MyButton } from "@/src/shared/ui/myButton";
import { SpecialityBadge } from "../specialityBadges/SpecialityBadge";


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
                    <SpecialityBadge id={doctor.mainSpeciality.id} text={doctor.mainSpeciality.name} main={true} />
                    {doctor.specialities.map((speciality, ind) => 
                        <SpecialityBadge key={ind} id={speciality.id} text={speciality.name} />
                    )}
                </section>
            </section>

            <section className={classes.blogTheme}>
                <span className={classes.sign}>Тематика блога:</span> {doctor.mainBlogTheme}
            </section>

            <Link className={classes.link} href={doctor.tgUrl}>
                <MyButton>
                    Связаться
                </MyButton>
            </Link>
        </section>
    )
}