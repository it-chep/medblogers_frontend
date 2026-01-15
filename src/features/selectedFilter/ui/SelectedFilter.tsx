"use client"

import { IFilter, IItemFilter, useFilterActions } from "@/src/entities/filter";
import { FC, useMemo } from "react";
import classes from './selectedFilter.module.scss'

interface IProps {
    items: IItemFilter[];
    labelSlug: keyof Omit<IFilter, 'minSubscribers' | 'maxSubscribers'>;
}

export const SelectedFilter: FC<IProps> = ({items, labelSlug}) => {

    const {setSelected} = useFilterActions()

    const selectedItems = useMemo(() => {
        return items.filter(item => item.selected)
    }, [items])

    const onDelete = (name: string) => {
        setSelected({field: labelSlug, name, selected: false})
    }

    return (
        <ul style={{display: selectedItems.length ? 'flex' : 'none'}} className={classes.list}>
            {
                selectedItems.map(item => 
                    <li 
                        key={item.name} 
                        className={classes.item}
                    >
                        {item.name}
                        <svg onClick={() => onDelete(item.name)} className={classes.close} width="16" height="16" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M25 7L7 25" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M25 25L7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </li>
                )
            }
        </ul>
    )
}