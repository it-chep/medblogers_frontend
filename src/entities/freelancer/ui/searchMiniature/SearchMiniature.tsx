import { FC } from "react";
import classes from './searchMiniature.module.scss'
import Link from "next/link";
import Image from "next/image";
import { ISearchFreelancer } from "../../model/types";


interface IProps {
    freelancer: ISearchFreelancer;
}

export const SearchMiniature: FC<IProps> = ({freelancer}) => {


    return (
        <Link href={`/freelancers/${freelancer.slug}`} className={classes.container}>
            { freelancer.image && <Image width={100} height={100} src={freelancer.image} alt="Фото фрилансера" /> }
            <section className={classes.data}>
                <h5>{freelancer.name}</h5>
                <p>{freelancer.specialityName}, г. {freelancer.cityName}</p>
            </section>
        </Link>
    )
}