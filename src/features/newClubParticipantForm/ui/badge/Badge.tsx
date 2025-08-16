import { FC } from "react";
import classes from './badge.module.scss'

interface IProps{
    name: string;
    onSelected: (name: string) => void;
}

export const Badge: FC<IProps> = ({name, onSelected}) => {


    return (
        <section className={classes.container}>
            {name}
            <span onClick={() => onSelected(name)} className={classes.delete}>×</span>
        </section>
    )
}