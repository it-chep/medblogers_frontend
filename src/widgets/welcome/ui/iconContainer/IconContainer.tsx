import { FC, PropsWithChildren, ReactElement } from "react";
import classes from './iconContainer.module.scss'

interface IProps {
    green?: boolean;
}

export const IconContainer: FC<IProps & PropsWithChildren> = ({green, children}) => {



    return (
        <section className={classes.container + (green ? ` ${classes.green}` : '')}>   
            {children}
        </section>
    )
}