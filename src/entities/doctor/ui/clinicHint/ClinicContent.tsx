import { FC } from "react";
import classes from './clinicHint.module.scss'


export const ClinicContent: FC = () => {

    const onClick = () => {
        window.open('https://t.me/m/r4HG18B9Nzdi')
    }

    return (
        <section className={classes.container}>
            <section className={classes.text}>Этот доктор работает <br></br>в Клинике Фомина</section>
            <span onClick={onClick}>
                Хочу поставить свой логотип
            </span>
        </section>
    )
}