import { OpenFilter } from "@/src/features/openFilter";
import { FC, PropsWithChildren, useState } from "react";
import classes from './filterItem.module.scss'
import { FilterList } from "@/src/entities/filter";
import { SearchFilter } from "@/src/features/searchFilter";

interface IProps{
    label: string;
    labelSlug: string;
    search?: boolean;
    items: {
        id?: number;
        name: string;
        slug?: string;
    }[];
}

export const FilterItem: FC<IProps & PropsWithChildren> = ({label, labelSlug, items, search = true, children}) => {

    const [searchItems, setSearchItems] = useState<IProps['items']>(items)

    return (
        <section className={classes.filterItem}>
            <OpenFilter label={label}>
                { search && <SearchFilter items={items} setItems={setSearchItems} /> }
                <FilterList labelSlug={labelSlug} items={searchItems} />
                {children}
            </OpenFilter>
        </section>
    )
}