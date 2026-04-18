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
import { FilterScroll } from "@/src/features/filterScroll/ui/FilterScroll"
import { SelectedFilter } from "@/src/features/selectedFilter"

interface IProps {
    forDesk: boolean;
    filtersRes: IFilter;
}

export const Filters: FC<IProps> = ({forDesk, filtersRes}) => {
    const advertisingOptions: IFilter['advertising'] = [
        {name: 'Продаёт рекламу', slug: 'can_sell_advertising'},
        {name: 'Закупает рекламу', slug: 'can_buy_advertising'},
        {name: 'Открыт к бартеру', slug: 'can_barter'},
        {name: 'Есть статьи', slug: 'has_blogs'},
    ]
    
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
        filter[labelSlug].forEach(item => item.selected = false)
        if(labelSlug === 'advertising'){
            filter.advertising.forEach(item => {
                item.selected = params.get(item.slug) === 'true'
            })
            return
        }

        const values = params.getAll(labelSlug === 'filterInfo' ? 'social_media' : labelSlug)
        values.forEach(value => {
            const targetInd = labelSlug === 'filterInfo' ?
                filter[labelSlug].findIndex(item => item.slug === value) :
                filter[labelSlug].findIndex(item => item.id === value)

            if(targetInd >= 0){
                filter[labelSlug][targetInd].selected = true
            }
        })
    }

    const withAdvertisingOptions = (filter: IFilter): IFilter => {
        return {
            ...filter,
            advertising: advertisingOptions.map(item => ({...item, selected: false})),
        }
    }
    
    function getFilters() {
        const copy: IFilter = withAdvertisingOptions(JSON.parse(JSON.stringify(filtersRes)))
        setMAX(+copy.maxSubscribers)
        setMIN(+copy.minSubscribers)
        initialFilterSelected(copy, 'cities')
        initialFilterSelected(copy, 'specialities')
        initialFilterSelected(copy, 'filterInfo')
        initialFilterSelected(copy, 'advertising')
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
        if(count.current < 1){
            count.current++;
        }
        else{
            window.scrollTo({top: 0})
            const copy: IFilter = JSON.parse(JSON.stringify(filter))
            initialFilterSelected(copy, 'cities')
            initialFilterSelected(copy, 'specialities')
            initialFilterSelected(copy, 'filterInfo')
            initialFilterSelected(copy, 'advertising')
            setFilter(copy)
            updateSlider()
        }
    }, [paramsKey])
    
    return (
        isLoading
            ?
        <section className={classes.loader}><LoaderContainer /></section>
            :
        <FilterScroll>
            <section 
                className={classes.container}
            >
                <FilterItem 
                    mobile={!forDesk} 
                    label="Город" 
                    labelSlug="cities" 
                    items={filter?.cities || []} 
                    selectedFilter={<SelectedFilter isDoctor items={filter?.cities || []} labelSlug={"cities"} />}
                />
                <MyHr />
                <FilterItem 
                    mobile={!forDesk} 
                    label="Специальность" 
                    labelSlug="specialities" 
                    items={filter?.specialities || []} 
                    selectedFilter={<SelectedFilter isDoctor items={filter?.specialities || []} labelSlug={"specialities"} />}
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
                <FilterItem
                    mobile={!forDesk}
                    label="Реклама (VIP)"
                    search={false}
                    labelSlug="advertising"
                    items={filter?.advertising.map(info => ({id: info.slug, ...info})) || []}
                    selectedFilter={<SelectedFilter isDoctor items={filter?.advertising || []} labelSlug={"advertising"} />}
                />
                <MyHr />
                <ApplyFilters 
                    currentMin={+filter.minSubscribers}
                    currentMax={+filter.maxSubscribers}
                >
                    <PreliminaryFilterCount />
                </ApplyFilters>
                <ResetFilters clearParams={clearParamsFilter} />
            </section>
        </FilterScroll>
    )
}
