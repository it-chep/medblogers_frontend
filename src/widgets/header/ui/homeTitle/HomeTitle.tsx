import { FC } from "react";
import classes from './homeTitle.module.scss'


export const HomeTitle: FC = () => {

    return (
        <section className={classes.container}>
            <h1 className={classes.title}>
                ЕДИНАЯ БАЗА ВРАЧЕЙ-БЛОГЕРОВ
            </h1>
            <section className={classes.desc}>
                Поиск коллег для реклам и коллабораций <br /> по соцсетям, специальностям и городам
            </section>
            <section className={classes.blurWrap}>
                <section className={classes.blur} />
            </section>
        </section>
    )
}