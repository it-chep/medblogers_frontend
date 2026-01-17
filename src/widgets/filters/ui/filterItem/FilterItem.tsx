import { OpenFilter } from "@/src/features/openFilter";
import React, { FC, PropsWithChildren, useState } from "react";
import classes from './filterItem.module.scss'
import { SearchFilter, useSearchItems } from "@/src/features/searchFilter";
import { FilterList, IFilter, IItemFilter, useFilterActions } from "@/src/entities/filter";

interface IProps{
    label: string;
    labelSlug: keyof Omit<IFilter, 'minSubscribers' | 'maxSubscribers'>;
    search?: boolean;
    items: IItemFilter[];
    mobile?: boolean;
    selectedFilter?: React.ReactElement;
}

export const FilterItem: FC<IProps & PropsWithChildren> = (
    {label, mobile, labelSlug, items, search = true, selectedFilter, children}
) => {

    const [value, setValue] = useState<string>('')
    const searchItems = useSearchItems(value, items)

    const {setSelected} = useFilterActions()
    
    const onSelected = (name: string) => {
        return (selected: boolean) => {
            setSelected({field: labelSlug, name: name, selected})
        }
    }

    return (
        <section className={classes.filterItem}>
            <OpenFilter 
                selectedFilter={selectedFilter} 
                mobile={mobile} 
                label={label}
            >
                { search && <SearchFilter value={value} setValue={setValue} /> }
               
                <FilterList 
                    labelSlug={labelSlug} 
                    mobile={mobile} 
                    onSelected={onSelected} 
                    items={searchItems} 
                />
                {children}
            </OpenFilter>
        </section>
    )
}