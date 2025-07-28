import { FC } from "react";
import classes from './myBadge.module.scss'

interface IProps {
    text: string;
}

export const MyBadge: FC<IProps> = ({text}) => {

    return (
        <span className={classes.badge}> 
            {text}
        </span>
    )
}