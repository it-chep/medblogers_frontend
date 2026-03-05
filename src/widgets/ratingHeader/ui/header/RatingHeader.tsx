import { FC } from "react";
import classes from './ratingHeader.module.scss'
import { Inf } from "../inf/Inf";


export const RatingHeader: FC = () => {

    

    return (
            <section className={classes.header}>
                <h1 className={classes.title}>
                    Рейтинг врачей MEDBLOGERS
                </h1>
                <h2 className={classes.sign}>
                    {/* Наша база открыта для врачей-блогеров из любого города.<br /> Здесь вы можете найти коллег для рекламных интеграций и коллабораций. */}
                </h2>
                <section className={classes.circle} />
                <section className={classes.inf}>
                    <Inf />
                </section>
            </section>
    )
}