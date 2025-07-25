import { OpenFilter } from "@/src/features/openFilter";
import { FC } from "react";
import classes from './filterItem.module.scss'
import { FilterList } from "@/src/entities/filter";

interface IProps{
    label: string;
    labelSlug: string;
    items: {
        id: number;
        name: string;
    }[];
}

export const FilterItem: FC<IProps> = ({label, labelSlug, items}) => {


    return (
        <section className={classes.filterItem}>
            <OpenFilter label={label}>
                <FilterList labelSlug={labelSlug} items={items} />
            </OpenFilter>
        </section>
    )
}