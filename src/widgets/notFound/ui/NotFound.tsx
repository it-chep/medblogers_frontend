import { FC } from "react";
import classes from './notFound.module.scss'
import Link from "next/link";
import { MyButton } from "@/src/shared/ui/myButton";



export const NotFoundWidget: FC = () => {


    return (
        <section className={classes.notFound + " wrapper_main"}>
            <h1 className={classes.status}>Ошибка 404</h1>
            <section className={classes.desc}>Неправильно набран адрес или такой страницы не существует</section>
            <section className={classes.inform}>
                <Link href={'https://t.me/maxim_jordan'}>
                    <MyButton>
                        Сообщить об ошибке
                    </MyButton>
                </Link>
            </section>
        </section>
    )
}