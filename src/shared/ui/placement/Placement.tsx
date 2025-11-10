import { FC } from "react";
import classes from './placement.module.scss'
import Link from "next/link";
import { MyButton } from "@/src/shared/ui/myButton";

interface IProps {
    link: string;
}

export const Placement: FC<IProps> = ({link}) => {
    

    return (
        <section className={classes.container}>  
            <section className={classes.title}>
                Размещение на сайте
            </section>
            <section className={classes.desc}>
                Ознакомьтесь с правилами и заполните анкету чтобы ваша карточка появилась на нашем сайте
            </section>
            <Link href={link}>
                <MyButton>
                    Подать заявку
                </MyButton>
            </Link>
        </section>
    )
}