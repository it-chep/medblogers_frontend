import { FC } from "react";
import classes from './offerBadge.module.scss'

interface IProps {
    value: string;
    bgColor?: string;
    fontColor?: string;
    border?: boolean;
}

export const OfferBadge: FC<IProps> = ({value, border, bgColor = '', fontColor = ''}) => {


    return (
        <section 
            className={classes.container + (border ? ` ${classes.border}` : '')}
            style={{
                backgroundColor: bgColor,
                color: fontColor,
            }}
        >
            {value}
        </section>
    )
}