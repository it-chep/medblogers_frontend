import { FC, PropsWithChildren } from "react";
import classes from './block.module.scss'

interface IProps {
    title: string;
    textCenter?: boolean;
}

export const Block: FC<IProps & PropsWithChildren> = ({title, textCenter, children}) => {


    return (
        <section className={classes.wrapper + (textCenter ? ` ${ classes.textCenter}` : '')}>
            <section className={classes.title}>{title}</section>
            <section className={classes.container}>
                {children}
            </section>
        </section>
    )
}