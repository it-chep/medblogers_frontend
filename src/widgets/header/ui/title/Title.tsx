import { FC } from "react";
import classes from './title.module.scss'




export const Title: FC = () => {


    return (
        <section className={classes.mainTitle}>
            <h1>
                <span className={classes.singleBase}>ЕДИНАЯ БАЗА </span>
                <span className={classes.doctorsBlogers}>ВРАЧЕЙ-БЛОГЕРОВ</span>
            </h1>
            <h2 className={classes.desc}>  
                Поиск коллег для реклам и коллабораций по соцсетям, специальностям и городам
            </h2>   
        </section>
    )
}