"use client"

import { FC, MouseEvent, useRef, useState } from "react";
import classes from './sort.module.scss'
import { sortValues } from "../../lib/const/values";
import { ISort } from "../../model/types";
import Image from "next/image";
import checkMark from '../../lib/assets/checkMark.png'
import arrow from '../../lib/assets/arrowDown.png'
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
                {selectedSort.name} <Image src={arrow.src} width={16} height={9} alt="Стрелка вниз" />
            </section>
            <ul className={classes.select}>
                {sortValues.map(sortValue => 
                    <li 
                        className={classes.option + (selectedSort.value === sortValue.value ? ` ${classes.selected}` : '')} 
                        value={sortValue.value}
                        key={sortValue.value}
                        onClick={() => onSelected(sortValue)}
                    >
                        {sortValue.name} {selectedSort.value === sortValue.value && <Image src={checkMark.src} height={10} width={15} alt="Галочка" /> }
                    </li>
                )}
            </ul>
        </section>
    )
}