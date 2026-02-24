import { FC, PropsWithChildren, ReactElement, ReactNode } from "react";
import classes from './item.module.scss'

interface IProps {
    header: ReactElement;
    text: ReactNode;
}

export const Item: FC<IProps & PropsWithChildren> = ({header, text, children}) => {


    return (
        <section className={classes.item}>
            <section className={classes.header}>
                {header}
            </section>
            <section className={classes.data}>
                {children}
                <section className={classes.text}>
                    {text}
                </section>
            </section>
        </section>
    )
}