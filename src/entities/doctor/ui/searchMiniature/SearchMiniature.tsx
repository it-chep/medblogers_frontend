import { FC } from "react";
import classes from './searchMiniature.module.scss'
import Link from "next/link";
import Image from "next/image";
import { ISearchDoctor } from "../../model/types";


interface IProps {
    doctor: ISearchDoctor;
}

export const SearchMiniature: FC<IProps> = ({doctor}) => {


    return (
        <Link href={`/doctors/${doctor.slug}`} className={classes.container}>
            { doctor.image && <Image width={100} height={100} src={doctor.image} alt="Фото врача" /> }
            <section className={classes.data}>
                <h5>{doctor.name}</h5>
                <p>{doctor.specialityName}, г. {doctor.cityName}</p>
            </section>
        </Link>
    )
}