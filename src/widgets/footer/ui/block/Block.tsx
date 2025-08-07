import { FC, PropsWithChildren } from "react";
import classes from './block.module.scss'

interface IProps {
    title: string;
    textCenter?: boolean;
}

export const Block: FC<IProps & PropsWithChildren> = ({title, textCenter, children}) => {


    return (
        <section className={classes.wrapper + (textCenter ? ` ${ classes.textCenter}` : '')}>
            <h4 className={classes.title}>{title}</h4>
            <section className={classes.container}>
                {children}
            </section>
        </section>
    )
}