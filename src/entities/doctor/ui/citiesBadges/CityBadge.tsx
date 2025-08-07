import { FC } from "react";
import classes from './cityBadge.module.scss'


interface IProps {
    text: string;
    main?: boolean;
}

export const CityBadge: FC<IProps> = ({text, main = null}) => {



    return (
        <section className={classes.badge + (main ? ` ${classes.main}` : '')}>
            {text}
        </section>
    )
}