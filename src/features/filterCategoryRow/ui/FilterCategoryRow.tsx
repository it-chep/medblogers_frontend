"use client"

import { FC, useEffect, useState } from "react";
import classes from './filterCategoryRow.module.scss'
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { IFilterCategoryRow } from "../model/types";

interface IProps {
    categories: IFilterCategoryRow[];   
    all: number;
    labelSearchParams: string;
}

type TFullFilterCategoryRow  = IFilterCategoryRow & {selected: boolean}

export const FilterCategoryRow: FC<IProps> = ({categories, all, labelSearchParams}) => {
    
    const searchParams = useSearchParams()
    const getIds = () => searchParams.getAll(labelSearchParams).map(c => c)

    const setCategoriesSelect = (ids: string[]): TFullFilterCategoryRow[] => {
        if(ids.length){
            return [
                {
                    id: '0',
                    name: 'Все',
                    selected: false,
                    count: String(all),
                }, ...categories.map(c => ({...c, selected: ids.includes(c.id)}))
            ]
        }
        else{
            return [
                {
                    id: '0',
                    name: 'Все',
                    selected: true,
                    count: String(all),
                }, ...categories.map(coop_type => ({...coop_type, selected: false}))
            ]
        }
    }

    const [fullCategories, setFullCategories] = useState<TFullFilterCategoryRow[]>(setCategoriesSelect(getIds()))

    const pathname = usePathname()
    const router = useRouter()

    const setNewUrl = (params: URLSearchParams) => {
        const newUrl = `${pathname}?${params.toString()}`
        router.push(newUrl)
    }

    const onClick = (selected: TFullFilterCategoryRow) => {
        const newParams = new URLSearchParams(searchParams)

        if((+selected.id !== 0)){ 
            if(!selected.selected) // добавить категрию
                newParams.append(labelSearchParams, String(selected.id))
            else{
                newParams.delete(labelSearchParams, String(selected.id))
            }
        }
        else{
            newParams.delete(labelSearchParams)
        }
        setNewUrl(newParams)
    }

    useEffect(() => {
        const ids = searchParams.getAll('coop_type').map(c => c)
        setFullCategories(setCategoriesSelect(ids))
    }, [searchParams])

    return (
        <ul className={classes.list}>
            {fullCategories.map(coop_type => 
                <li
                    key={coop_type.id}
                    className={classes.item + (coop_type.selected ? ` ${classes.selected}` : '')}         
                    onClick={() => onClick(coop_type)}           
                >
                    {coop_type.name} <span className={classes.count}>({coop_type.count})</span>
                </li>
            )}
        </ul>
    )
}