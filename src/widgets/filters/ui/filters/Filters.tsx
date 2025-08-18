"use client"

import { FC, useEffect, useRef, useState } from "react"
import { FilterItem } from "../filterItem/FilterItem"
import classes from './filters.module.scss'
import { MyHr } from "@/src/shared/ui/myHr"
import { Slider } from "@/src/features/slider"
import { ApplyFilters } from "@/src/features/applyFilters"
import { ResetFilters } from "@/src/features/resetFilters"
import { useSearchParams } from "next/navigation"
import { filterService } from "../../../../entities/filter/api/FilterService"
import { LoaderContainer } from "@/src/shared/ui/loaderContainer"
import { PreliminaryFilterCount } from "@/src/features/preliminaryFilterCount"
import { IFilter, useFilterActions } from "@/src/entities/filter"
import { useAppSelector } from "@/src/app/store/store"

const MAX = 400_000
const MIN = 300

interface IProps {
    mobile?: boolean;
}

export const Filters: FC<IProps> = ({mobile}) => {
    
    const {filter, isLoading} = useAppSelector(s => s.filterReducer)
    const {setFilter, setIsLoading} = useFilterActions()

    const searchParams = useSearchParams()

    let initialMin = searchParams.get('min_subscribers') ? Number(searchParams.get('min_subscribers')) : MIN
    let initialMax = searchParams.get('max_subscribers') ? Number(searchParams.get('max_subscribers')) : MAX

    const initial =() => {
        if(initialMin < MIN){
            initialMin = MIN;
        }
        if(initialMax > MAX){
            initialMax = MAX;
        }
        if(initialMin > initialMax){
            initialMin = initialMax;
        }
    }
    
    initial()

    const [valueMin, setValueMin] = useState<number>(initialMin) 
    const [valueMax, setValueMax] = useState<number>(initialMax) 

    const onBlurSlider = (valMin: number, valMax: number) => {
        setValueMin(valMin)
        setValueMax(valMax)
    }

    const initialFilterSelected = (filter: IFilter, labelSlug: keyof IFilter) => {
        const params = new URLSearchParams(searchParams);
        const values = params.getAll(labelSlug === 'filterInfo' ? 'social_media' : labelSlug)
        filter[labelSlug].forEach(item => item.selected = false)
        if(values){
            values.forEach(value => {
                const targetInd = labelSlug === 'filterInfo' ? 
                filter[labelSlug].findIndex(item => item.name === value) :
                filter[labelSlug].findIndex(item => item.id === value) 
                        
                if(targetInd >= 0){
                    filter[labelSlug][targetInd].selected = true
                }     
            })
        }
    }
    
    async function getFilters() {
        try{
            setIsLoading(true)
            const filtersRes = await filterService.getAll()
            initialFilterSelected(filtersRes, 'cities')
            initialFilterSelected(filtersRes, 'specialities')
            initialFilterSelected(filtersRes, 'filterInfo')
            setFilter(filtersRes)
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

    const isOne = useRef<boolean>(true)
    useEffect(() => {
        if(isOne.current){
            isOne.current = false;
            return
        }
        window.scrollTo({top: 0})
        const copy = JSON.parse(JSON.stringify(filter))
        initialFilterSelected(copy, 'cities')
        initialFilterSelected(copy, 'specialities')
        initialFilterSelected(copy, 'filterInfo')
        setFilter(copy)
    }, [searchParams])

    return (
        isLoading
            ?
        <section className={classes.loader}><LoaderContainer /></section>
            :
        <section className={classes.container}>
            <FilterItem 
                mobile={mobile} 
                label="Город" 
                labelSlug="cities" 
                items={filter?.cities || []} 
            />
            <MyHr />
            <FilterItem 
                mobile={mobile} 
                label="Специальность" 
                labelSlug="specialities" 
                items={filter?.specialities || []} 
            />
            <MyHr />
            <FilterItem 
                mobile={mobile} 
                label="Подписчики" 
                search={false} 
                labelSlug="filterInfo" 
                items={filter?.filterInfo || []}
            >
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
            <MyHr />
            <ApplyFilters 
                currentMin={valueMin}
                currentMax={valueMax}
            >
                <PreliminaryFilterCount />
            </ApplyFilters>
            <ResetFilters />
        </section>
    )
}