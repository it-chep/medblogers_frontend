"use client"

import { FC, useEffect, useMemo, useRef, useState } from "react"
import { FilterItem } from "../filterItem/FilterItem"
import classes from './filters.module.scss'
import { MyHr } from "@/src/shared/ui/myHr"
import { Slider } from "@/src/features/slider"
import { ApplyFilters } from "@/src/features/applyFilters"
import { ResetFilters } from "@/src/features/resetFilters"
import { useSearchParams } from "next/navigation"
import { LoaderContainer } from "@/src/shared/ui/loaderContainer"
import { PreliminaryFilterCount } from "@/src/features/preliminaryFilterCount"
import { IFilter, useFilterActions } from "@/src/entities/filter"
import { useAppSelector } from "@/src/app/store/store"
import { clearParamsFilter } from "@/src/shared/lib/helpers/clearParamsFilter"


interface IProps {
    forDesk: boolean;
    filtersRes: IFilter;
}

export const Filters: FC<IProps> = ({forDesk, filtersRes}) => {
    
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
    
    function getFilters() {
        const copy: IFilter = JSON.parse(JSON.stringify(filtersRes))
        setMAX(+copy.maxSubscribers)
        setMIN(+copy.minSubscribers)
        initialFilterSelected(copy, 'cities')
        initialFilterSelected(copy, 'specialities')
        initialFilterSelected(copy, 'filterInfo')
        initialMinMax(copy)
        setValueMin(+copy.minSubscribers)
        setValueMax(+copy.maxSubscribers)
        setFilter(copy)
        setIsLoading(false)
    }

    useEffect(() => {
        getFilters()
    }, [])

    const paramsKey = useMemo(() => {
        const params = new URLSearchParams(searchParams.toString());
        params.delete('page');
        params.delete('sort')
        return params.toString();
    }, [searchParams]);

    const updateSlider = () => {
        let initialMin = searchParams.get('min_subscribers') ? Number(searchParams.get('min_subscribers')) : MIN
        let initialMax = searchParams.get('max_subscribers') ? Number(searchParams.get('max_subscribers')) : MAX
        onBlurSlider(initialMin, initialMax)
    }

    const count = useRef<number>(0)
    useEffect(() => {
        if(count.current < 2){
            count.current++;
        }
        else{
            window.scrollTo({top: 0})
            const copy: IFilter = JSON.parse(JSON.stringify(filter))
            initialFilterSelected(copy, 'cities')
            initialFilterSelected(copy, 'specialities')
            initialFilterSelected(copy, 'filterInfo')
            setFilter(copy)
            updateSlider()
        }
    }, [paramsKey])
    
    return (
        isLoading
            ?
        <section className={classes.loader}><LoaderContainer /></section>
            :
        <section 
            className={classes.container}
        >
            <FilterItem 
                mobile={!forDesk} 
                label="Город" 
                labelSlug="cities" 
                items={filter?.cities || []} 
            />
            <MyHr />
            <FilterItem 
                mobile={!forDesk} 
                label="Специальность" 
                labelSlug="specialities" 
                items={filter?.specialities || []} 
            />
            <MyHr />
            <FilterItem 
                mobile={!forDesk} 
                label="Подписчики" 
                search={false} 
                labelSlug="filterInfo" 
                items={filter?.filterInfo.map(info => ({id: info.slug, ...info})) || []}
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
            <ResetFilters clearParams={clearParamsFilter} />
        </section>
    )
}