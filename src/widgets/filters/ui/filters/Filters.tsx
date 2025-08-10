"use client"

import { FC, useEffect, useState } from "react"
import { FilterItem } from "../filterItem/FilterItem"
import classes from './filters.module.scss'
import { MyHr } from "@/src/shared/ui/myHr"
import { Slider } from "@/src/features/slider"
import { ApplyFilters } from "@/src/features/applyFilters"
import { ResetFilters } from "@/src/features/resetFilters"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { IFilter } from "../../model/types"
import { filterService } from "../../api/FilterService"
import { LoaderContainer } from "@/src/shared/ui/loaderContainer"

const MAX = 400_000
const MIN = 300

interface IProps {
    filters: IFilter | null;
    setFilters: (filters: IFilter) => void;
    mobile?: boolean;
}

export const Filters: FC<IProps> = ({filters, mobile, setFilters}) => {
    
    const [isLoading, setIsLoading] = useState<boolean>(true)

    const searchParams = useSearchParams()
    const pathname = usePathname()
    const router = useRouter()

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
    
    const setNewUrl = (params: URLSearchParams) => {
        const newUrl = `${pathname}?${params.toString()}`
        router.push(newUrl)
    }

    initial()

    useEffect(() => {
        const params = new URLSearchParams(searchParams);
        params.set('min_subscribers', String(initialMin))
        params.set('max_subscribers', String(initialMax))
        setNewUrl(params)
    }, [])

    useEffect(() => {
        const params = new URLSearchParams(searchParams);
        setValueMin(initialMin)
        setValueMax(initialMax)
        setNewUrl(params)
    }, [searchParams])

    
    const [valueMin, setValueMin] = useState<number>(initialMin) 
    const [valueMax, setValueMax] = useState<number>(initialMax) 

    const onBlurSlider = (valMin: number, valMax: number) => {
        setValueMin(valMin)
        setValueMax(valMax)
    }
    
    async function getFilters() {
        try{
            setIsLoading(true)
            const filtersRes = await filterService.getAll()
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
        <section className={classes.loader}><LoaderContainer /></section>
            :
        <section className={classes.container}>
            <FilterItem 
                mobile={mobile} 
                label="Город" 
                labelSlug="city" 
                items={filters?.cities || []} 
            />
            <MyHr />
            <FilterItem 
                mobile={mobile} 
                label="Специальность" 
                labelSlug="speciality" 
                items={filters?.specialities || []} 
            />
            <MyHr />
            <FilterItem 
                mobile={mobile} 
                label="Подписчики" 
                search={false} 
                labelSlug="social_media" 
                items={filters?.filterInfo || []}
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
            />
            <ResetFilters />
        </section>
    )
}