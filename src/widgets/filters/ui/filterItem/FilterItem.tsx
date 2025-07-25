import { OpenFilter } from "@/src/features/openFilter";
import { FC, PropsWithChildren } from "react";
import classes from './filterItem.module.scss'
import { FilterList } from "@/src/entities/filter";

interface IProps{
    label: string;
    labelSlug: string;
    items: {
        id?: number;
        name: string;
        slug?: string;
    }[];
}

export const FilterItem: FC<IProps & PropsWithChildren> = ({label, labelSlug, items, children}) => {


    return (
        <section className={classes.filterItem}>
            <OpenFilter label={label}>
                <FilterList labelSlug={labelSlug} items={items} />
                {children}
            </OpenFilter>
        </section>
    )
}