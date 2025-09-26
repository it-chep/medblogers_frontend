import { FC } from "react";
import classes from './item.module.scss'
import Image from "next/image";
import { ICityDoctor, ISpecialityDoctor } from "../../model/types";

interface IProps {
    label: 'cities' | 'specialities';
    item: ICityDoctor | ISpecialityDoctor;
    icon: string;

}

export const Item: FC<IProps> = ({label, icon, item}) => {

    

    return (
        <section data-id={item.id} className={classes.container}>
            <Image src={icon} width={30} height={30} alt={label} />
            <section className={classes.data}>
                <p>{item.name}</p>
                <p className={classes.count}>Кол-во врачей: {item.doctorsCount}</p>
            </section>
        </section>
    )
}