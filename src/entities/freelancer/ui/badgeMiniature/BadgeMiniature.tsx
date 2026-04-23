import { FC, ReactElement } from "react";
import classes from './badgeMiniature.module.scss'

interface IProps {
    svg: ReactElement;
    name: string;
}

export const BadgeMiniature: FC<IProps> = ({svg, name}) => {


    return (
        <section className={classes.container}>
            {svg}
            <span className={classes.name}>
                {name}
            </span>
        </section>
    )
}