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
        <Link 
            href={`/helpers/${freelancer.slug}`} 
            className={classes.container}
        >
            <Image 
                width={100} 
                height={100} 
                src={freelancer.image} 
                alt="Фото фрилансера" 
                className={classes.avatar}
            />
            <section className={classes.data}>
                <p className={classes.name}>{freelancer.name}</p>
                <p className={classes.specialityName}>{freelancer.specialityName}, г. {freelancer.cityName}</p>
            </section>
        </Link>
    )
}