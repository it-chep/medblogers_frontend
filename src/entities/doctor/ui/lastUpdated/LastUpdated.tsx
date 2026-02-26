import { FC } from "react";
import classes from './lastUpdated.module.scss'


interface IProps {
    lastUpdated: string;
    vip?: boolean;
}

export const LastUpdated: FC<IProps> = ({lastUpdated, vip = false}) => {



    return (
        <section className={classes.lastUpdated + (vip ? ` ${classes.vip}` : '')}>
            Дата последнего обновления: {lastUpdated}
        </section>
    )
}