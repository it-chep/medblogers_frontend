import { FC } from "react";
import classes from './lastUpdated.module.scss'


interface IProps {
    lastUpdated: string;
}

export const LastUpdated: FC<IProps> = ({lastUpdated}) => {



    return (
        <section className={classes.lastUpdated}>
            Дата последнего обновления: {lastUpdated}
        </section>
    )
}