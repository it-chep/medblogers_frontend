import { FC, PropsWithChildren } from "react";
import classes from './list.module.scss'


interface IProps {
    sign?: string;
}

export const Sign: FC<IProps & PropsWithChildren> = ({sign, children}) => {


    return (
        <section className={classes.sign}>
            <span className={classes.text}>{sign}</span>
            {children}
        </section>
    )
}