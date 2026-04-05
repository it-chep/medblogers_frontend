import { FC, ReactNode } from "react";
import classes from './titlePage.module.scss'

interface IProps {
    sign: string;
    title: string;
    subTitle: ReactNode;
}

export const TitlePage: FC<IProps> = ({sign, title, subTitle}) => {


    return (
        <section className={classes.container}>
            <section className={classes.mainSign}>
                {sign}
            </section>
            <section className={classes.header}>
                <h1 className={classes.title}>
                    {title}
                </h1>
                <section className={classes.subTitle}>
                    {subTitle}
                </section>
                <section className={classes.circle} />
            </section>
        </section>
    )
}