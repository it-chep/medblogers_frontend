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
        selected?: boolean;
    }[];
    mobile?: boolean;

}

export const FilterItem: FC<IProps & PropsWithChildren> = ({label, mobile, labelSlug, items, search = true, children}) => {


    const [value, setValue] = useState<string>('')


    return (
        <section className={classes.filterItem}>
            <OpenFilter mobile={mobile} label={label}>
                { search && <SearchFilter value={value} setValue={setValue} /> }
                <FilterList mobile={mobile} labelSlug={labelSlug} 
                    items={
                        items.filter(item => {
                            return item.name.toLocaleLowerCase().includes(value.toLocaleLowerCase())
                        }
                    )} 
                />
                {children}
            </OpenFilter>
        </section>
    )
}