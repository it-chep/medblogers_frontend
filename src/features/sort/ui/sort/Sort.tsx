"use client"

import { FC, MouseEvent, useRef, useState } from "react";
import classes from './sort.module.scss'
import { sortValues } from "../../lib/const/values";
import { ISort } from "../../model/types";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export const Sort: FC = () => {

    const searchParams = useSearchParams()
    const initialSort = searchParams.get('sort') || 'SUBSCRIBERS_DESC'

    const [selectedSort, setSelectedSort] = useState<ISort>(sortValues.find(s => s.value === initialSort) || sortValues[0])
    const refWrapper = useRef<HTMLDivElement>(null)
    const router = useRouter()
    const pathname = usePathname()

    const onSelected = (selected: ISort) => {
        onToggleOpen()
        setSelectedSort(selected)
        newUrl(selected.value)
    }

    const newUrl = (selectedSort: string) => {
        const params = new URLSearchParams(searchParams)
        params.delete('page')
        params.set('sort', selectedSort)
        const newUrl = `${pathname}?${params.toString()}`
        router.push(newUrl)
    } 

    const onToggleOpen = () => {
        if(refWrapper.current){
            refWrapper.current.classList.toggle(classes.open)
        }
    }

    const cancelDB = (e: MouseEvent) => {
        e.preventDefault()
    }

    return (
        <section ref={refWrapper} className={classes.wrapper} >
            <section 
                onMouseDown={cancelDB}
                onClick={onToggleOpen} 
                className={classes.selectedSort}
            >
                <span>Подписчики: <span className={classes.highlight}>{selectedSort.name}</span></span> 
                <svg width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.23181 8.68484C7.65607 9.10505 8.34392 9.10505 8.76818 8.68484L15.6818 1.83693C16.1061 1.4167 16.1061 0.735389 15.6818 0.315166C15.2575 -0.105055 14.5697 -0.105055 14.1455 0.315166L7.99999 6.4022L1.85456 0.315166C1.4303 -0.105055 0.742449 -0.105055 0.31819 0.315166C-0.106063 0.735388 -0.106063 1.4167 0.31819 1.83693L7.23181 8.68484ZM6.91362 6.84791V7.92395H9.08636V6.84791H6.91362Z" fill="white"/>
                </svg>
            </section>
            <ul className={classes.select}>
                {sortValues.map(sortValue => 
                    <li 
                        className={classes.option + (selectedSort.value === sortValue.value ? ` ${classes.selected}` : '')} 
                        value={sortValue.value}
                        key={sortValue.value}
                        onClick={() => onSelected(sortValue)}
                    >
                        Подписчики: {sortValue.name} 
                        {
                            selectedSort.value === sortValue.value 
                                && 
                            <svg width="21" height="14" viewBox="0 0 21 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.29142 13.6812C7.71918 14.1063 8.41269 14.1063 8.84045 13.6812L20.6792 1.85787C21.1069 1.43285 21.1069 0.743772 20.6792 0.318759C20.2514 -0.106253 19.5579 -0.106253 19.1302 0.318759L8.06594 11.3726L1.86984 5.21616C1.44208 4.79115 0.748568 4.79115 0.320813 5.21616C-0.106938 5.64117 -0.106938 6.33025 0.320813 6.75527L7.29142 13.6812ZM6.97061 11.8234V12.9117H9.16126V11.8234H6.97061Z" />
                            </svg>
                        }
                    </li>
                )}
            </ul>
        </section>
    )
}