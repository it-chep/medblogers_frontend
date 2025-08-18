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



interface IProps {
    mobile?: boolean;
}

export const Filters: FC<IProps> = ({mobile}) => {
    
    const {filter, isLoading} = useAppSelector(s => s.filterReducer)
    const {setFilter, setIsLoading, setCurrentMax, setCurrentMin} = useFilterActions()

    const searchParams = useSearchParams()

    const [valueMin, setValueMin] = useState<number>(0)
    const [valueMax, setValueMax] = useState<number>(0)

    const [MAX, setMAX] = useState<number>(0)
    const [MIN, setMIN] = useState<number>(0)
    
    const initialMinMax =(filter: IFilter) => {
        let initialMin = searchParams.get('min_subscribers') ? Number(searchParams.get('min_subscribers')) : +filter.minSubscribers
        let initialMax = searchParams.get('max_subscribers') ? Number(searchParams.get('max_subscribers')) : +filter.maxSubscribers
        if(initialMax && initialMin){
            if(initialMin < +filter.minSubscribers){
                initialMin = +filter.minSubscribers;
            }
            if(initialMax > +filter.maxSubscribers){
                initialMax = +filter.maxSubscribers;
            }
            if(initialMin > initialMax){
                initialMin = initialMax;
            }
        }
        filter.minSubscribers = String(initialMin)
        filter.maxSubscribers = String(initialMax)
    }
    
    const onBlurSlider = (valMin: number, valMax: number) => {
        setCurrentMin(valMin)
        setCurrentMax(valMax)
        setValueMax(valMax)
        setValueMin(valMin)
    }

    const initialFilterSelected = (filter: IFilter, labelSlug: keyof Omit<IFilter, 'minSubscribers' | 'maxSubscribers'>) => {
        const params = new URLSearchParams(searchParams);
        const values = params.getAll(labelSlug === 'filterInfo' ? 'social_media' : labelSlug)
        filter[labelSlug].forEach(item => item.selected = false)
        if(values){
            values.forEach(value => {
                const targetInd = labelSlug === 'filterInfo' ? 
                filter[labelSlug].findIndex(item => item.slug === value) :
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
            setMAX(+filtersRes.maxSubscribers)
            setMIN(+filtersRes.minSubscribers)
            initialFilterSelected(filtersRes, 'cities')
            initialFilterSelected(filtersRes, 'specialities')
            initialFilterSelected(filtersRes, 'filterInfo')
            initialMinMax(filtersRes)
            setValueMin(+filtersRes.minSubscribers)
            setValueMax(+filtersRes.maxSubscribers)
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
                currentMin={+filter.minSubscribers}
                currentMax={+filter.maxSubscribers}
            >
                <PreliminaryFilterCount />
            </ApplyFilters>
            <ResetFilters />
        </section>
    )
}