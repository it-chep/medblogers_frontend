"use client"

import { FC, useEffect, useState } from "react"
import { FilterItem } from "../filterItem/FilterItem"
import classes from './filters.module.scss'
import { MyHr } from "@/src/shared/ui/myHr"
import { filterService, IFilter } from "@/src/entities/filter"
import { Slider } from "@/src/features/slider"

const MAX = 400_000
const MIN = 300


export const Filters: FC = () => {
    
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [filters, setFilters] = useState<IFilter>()

    const [valueMax, setValueMax] = useState<number>(MAX) 
    const [valueMin, setValueMin] = useState<number>(MIN) 

    const onBlurSlider = (valMin: number, valMax: number) => {
        setValueMin(valMin)
        setValueMax(valMax)
    }
    
    async function getFilters() {
        try{
            setIsLoading(true)
            const filtersRes = await filterService.getAll()
            console.log(filtersRes)
            setFilters(filtersRes)
        }
        catch(e){
            console.log(e)
        }
        finally{
            setIsLoading(false)
        }
    }

    useEffect(() => {
        getFilters()
    }, [])

    return (
        isLoading
            ?
        <section>Loading...</section>
            :
        <section className={classes.container}>
            <FilterItem label="Город" labelSlug="city" items={filters?.cities || []} />
            <MyHr />
            <FilterItem label="Специальность" labelSlug="speciality" items={filters?.specialities || []} />
            <MyHr />
            <FilterItem label="Подписчики" labelSlug="sub" items={filters?.filter_info || []}>
                <Slider 
                    max={MAX}
                    min={MIN}
                    valueMax={valueMax} 
                    valueMin={valueMin} 
                    setValueMax={setValueMax} 
                    setValueMin={setValueMin} 
                    onBlur={onBlurSlider}
                />
            </FilterItem>
        </section>


    )
}