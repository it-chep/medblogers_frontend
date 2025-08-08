import { FC } from "react";
import classes from './statisticItem.module.scss'
import { MyBadge } from "@/src/shared/ui/myBadge";
import Image from "next/image";
import checkImg from '../lib/assets/check_mark.png'

interface IProps {
    label: string;
    count: string;
}

export const StatisticItem: FC<IProps> = ({label, count}) => {


    return (
        <section className={classes.wrapper}>
            <span className={classes.text}>
                {label}
                <span className={classes.colon}>:</span>
            </span>
            <span className={classes.count}>
                <Image src={checkImg.src} alt="Галочка" width={24} height={24} />
                <span className={classes.countMobile}>{count}</span>
                <span className={classes.countDesc}><MyBadge text={count} /></span>
            </span>
        </section>
    )
}