import { OpenFilter } from "@/src/features/openFilter";
import { FC, PropsWithChildren, useEffect, useState } from "react";
import classes from './filterItem.module.scss'
import { SearchFilter } from "@/src/features/searchFilter";
import { useSearchParams } from "next/navigation";
import { FilterList } from "../filterList/FilterList";

interface IProps{
    label: string;
    labelSlug: string;
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
        const values = params.getAll(labelSlug)
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
            <OpenFilter mobile={mobile} label={label}>
                { search && <SearchFilter items={items} setItems={setSearchItems} /> }
                <FilterList mobile={mobile} labelSlug={labelSlug} items={searchItems} />
                {children}
            </OpenFilter>
        </section>
    )
}