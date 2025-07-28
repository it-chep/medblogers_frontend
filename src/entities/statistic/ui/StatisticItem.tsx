import { FC } from "react";
import classes from './statisticItem.module.scss'
import { MyBadge } from "@/src/shared/ui/myBadge";

interface IProps {
    label: string;
    count: string;
}

export const StatisticItem: FC<IProps> = ({label, count}) => {


    return (
        <section className={classes.wrapper}>
            <span className={classes.text}>{label}</span>
            <span className={classes.count}><MyBadge text={count} /></span>
        </section>
    )
}