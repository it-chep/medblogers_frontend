import { FC, PropsWithChildren } from "react";
import classes from './filterBadge.module.scss'

type IItem = {
    id: number;
    name: string;
}

interface IProps {
    item: IItem;
    labelSlug: string;
}


export const FilterBadge: FC<IProps & PropsWithChildren> = ({item, labelSlug, children}) => {


    return (
        <section data-id={item.id} id={labelSlug + '-' + item.id} className={classes.filterBadge}>
            {item.name} 
            {children}
        </section>
    )
}