import { FC } from "react";
import classes from './badge.module.scss'
import { IItem } from "@/src/shared/model/types";

interface IProps{
    item: IItem;
    onSelected: (id: number) => void;
}

export const BadgeDelete: FC<IProps> = ({item, onSelected}) => {

    return (
        <section className={classes.container}>
            {item.name}
            <span 
                onClick={() => onSelected(item.id)} 
                className={classes.delete}
            >
                ×
            </span>
        </section>
    )
}