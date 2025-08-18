import { OpenFilter } from "@/src/features/openFilter";
import { FC, PropsWithChildren, useEffect, useState } from "react";
import classes from './filterItem.module.scss'
import { SearchFilter } from "@/src/features/searchFilter";
import { useSearchParams } from "next/navigation";
import { FilterList } from "../filterList/FilterList";
import { IFilter, useFilterActions } from "@/src/entities/filter";
import { useAppSelector } from "@/src/app/store/store";

interface IProps{
    label: string;
    labelSlug: keyof Omit<IFilter, 'minSubscribers' | 'maxSubscribers'>;
    search?: boolean;
    items: {
        id?: string;
        name: string;
        doctorsCount?: string;
        slug?: string;
    }[];
    mobile?: boolean;

}

export const FilterItem: FC<IProps & PropsWithChildren> = ({label, mobile, labelSlug, items, search = true, children}) => {

    const [searchItems, setSearchItems] = useState<IProps['items']>(items)
    const {filter} = useAppSelector(s => s.filterReducer)

    useEffect(() => {
        setSearchItems(filter[labelSlug])
    }, [filter])

    return (
        <section className={classes.filterItem}>
            <OpenFilter mobile={mobile} label={label}>
                { search && <SearchFilter items={items} setItems={setSearchItems} /> }
                <FilterList mobile={mobile} labelSlug={labelSlug} items={searchItems} />
                {children}
            </OpenFilter>
        </section>
    )
}