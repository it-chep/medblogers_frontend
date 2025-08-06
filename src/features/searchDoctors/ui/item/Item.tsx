import { FC } from "react";
import classes from './item.module.scss'
import { ICity } from "@/src/entities/city";
import { ISpeciality } from "@/src/entities/speciality";
import Image from "next/image";

interface IProps {
    label: 'city' | 'speciality';
    item: ICity | ISpeciality;
    icon: string;

}

export const IItem: FC<IProps> = ({label, icon, item}) => {

    

    return (
        <section data-id={item.id} className={classes.container}>
            <Image src={icon} width={30} height={30} alt={label} />
            <section className={classes.data}>
                <p>{item.name}</p>
                <p className={classes.count}>Кол-во врачей: {item.doctors_count}</p>
            </section>
        </section>
    )
}