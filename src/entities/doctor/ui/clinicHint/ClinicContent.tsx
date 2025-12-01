import { FC } from "react";
import classes from './clinicHint.module.scss'


export const ClinicContent: FC = () => {

    const onClick = () => {
        window.open('https://t.me/m/r4HG18B9Nzdi')
    }

    return (
        <section className={classes.container}>
            <section className={classes.text}>Этот доктор работает в Клинике Фомина</section>
            <span onClick={onClick}>
                Хочу также
            </span>
        </section>
    )
}