import { OpenFilter } from "@/src/features/openFilter";
import { FC, PropsWithChildren, useEffect, useState } from "react";
import classes from './filterItem.module.scss'
import { SearchFilter } from "@/src/features/searchFilter";
import { useSearchParams } from "next/navigation";
import { FilterList } from "../filterList/FilterList";
import { clearParams } from "@/src/shared/lib/helpers/clearParams";

interface IProps{
    label: string;
    labelSlug: string;
    search?: boolean;
    items: {
        id?: number;
        name: string;
        doctors_count?: number;
        slug?: string;
    }[];
}

export const FilterItem: FC<IProps & PropsWithChildren> = ({label, labelSlug, items, search = true, children}) => {

    const [searchItems, setSearchItems] = useState<IProps['items']>(items)
    const searchParams = useSearchParams()

    const clearCheckBoxes = () => {
        const elems: NodeListOf<HTMLInputElement> = document.querySelectorAll(`.${labelSlug} input`)
        elems.forEach(elem => {
            elem.checked = false;
        })
    }

    const initialCheckBoxes = () => {
        clearCheckBoxes()
        const params = new URLSearchParams(searchParams);
        const values = params.get(labelSlug)?.split(',')
        if(values){
            values.forEach(value => {
                const elem: HTMLInputElement | null = document.querySelector(`#${labelSlug}-${value} input`)
                if(elem){
                    elem.checked = true;
                }
            })
        }
    }

    useEffect(() => {
        initialCheckBoxes()
    }, [searchParams])

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