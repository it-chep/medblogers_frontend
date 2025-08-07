import { FC } from "react";
import classes from './notFound.module.scss'



export const NotFoundWidget: FC = () => {


    return (
        <section className={classes.notFound + " wrapper_main"}>
            <h1 className={classes.status}>Ошибка 404</h1>
            <section className={classes.desc}>Неправильно набран адрес или такой страницы не существует</section>
            <section className={classes.inform}>
                
            </section>
        </section>
    )
}