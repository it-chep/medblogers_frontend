import { FC } from "react";
import classes from './list.module.scss'


interface IProps {
    title: string;
    items: string[];
}

export const List: FC<IProps> = ({title, items}) => {


    return (
        <section className={classes.wrapper}>
            <span className={classes.subtitle}>{title}</span>
            <ul className={classes.list}>
                {items.map((item, ind) => 
                    <li key={ind}>- {item}</li>
                )}
            </ul>
        </section>
    )
}