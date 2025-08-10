import { FC } from "react";
import classes from './searchMiniature.module.scss'
import Link from "next/link";
import { IDoctorSearch } from "../../model/types";
import Image from "next/image";

import IMG from "@/public/user_borisova-Love-Petrovna_2.jpg"

interface IProps {
    doctor: IDoctorSearch;
}

export const SearchMiniature: FC<IProps> = ({doctor}) => {


    return (
        <Link href={`/doctors/${doctor.slug}`} className={classes.container}>
            <Image width={100} height={100} src={IMG.src} alt="Фото врача" />
            <section className={classes.data}>
                <h5>{doctor.name}</h5>
                <p>{doctor.specialityName}, г. {doctor.cityName}</p>
            </section>
        </Link>
    )
}