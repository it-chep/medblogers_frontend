"use client"

import { FC, useMemo, useState } from "react";
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

    const fullCategories = useMemo(() => {
        const ids = getIds()
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
    }, [searchParams])  // если будет ?page, то нужно сделать другую зависимость без page

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

    return (
        <ul className={classes.list}>
            {fullCategories.map(category => 
                <li
                    key={category.id}
                    className={classes.item + (category.selected ? ` ${classes.selected}` : '')}         
                    onClick={() => onClick(category)}           
                >
                    {category.name} <span className={classes.count}>({category.count})</span>
                </li>
            )}
        </ul>
    )
}