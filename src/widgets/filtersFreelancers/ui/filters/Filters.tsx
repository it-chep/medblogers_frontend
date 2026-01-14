"use client"

import { useAppSelector } from "@/src/app/store/store";
import { useSearchParams } from "next/navigation";
import { FC, useEffect, useMemo, useRef } from "react";
import classes from './filters.module.scss'
import { LoaderContainer } from "@/src/shared/ui/loaderContainer";
import { FilterItem } from "../filterItem/FilterItem";
import { MyHr } from "@/src/shared/ui/myHr";
import { ApplyFiltersFreelancers } from "@/src/features/applyFiltersFreelancers";
import { ResetFilters } from "@/src/features/resetFilters";
import { clearParamsFilterFreelancer } from "@/src/shared/lib/helpers/clearParamsFilterFreelancer";
import { IFilterFreelancer, useFilterFreelancerActions } from "@/src/entities/filterFreelancer";
import { PreliminaryFilterCountFreelancers } from "@/src/features/preliminaryFilterCountFreelancers";
import { FilterScroll } from "@/src/features/filterScroll/ui/FilterScroll";
import { SelectedFilter } from "@/src/features/selectedFilter";

interface IProps {
    forDesk: boolean;
    filtersRes: IFilterFreelancer;
}

export const Filters: FC<IProps> = ({forDesk, filtersRes}) => {
    
    const {filterFreelancer, isLoading} = useAppSelector(s => s.filterFreelancerReducer)
    const {setFilter, setIsLoading} = useFilterFreelancerActions()

    const searchParams = useSearchParams()

    const initialFilterSelected = (filter: IFilterFreelancer, labelSlug: keyof IFilterFreelancer) => {
        const params = new URLSearchParams(searchParams);
        const values = params.getAll(labelSlug === 'priceCategories' ? 'price_category' : labelSlug)
        filter[labelSlug].forEach(item => item.selected = false)
        if(values){
            values.forEach(value => {
                const targetInd = filter[labelSlug].findIndex(item => {
                    return item.id === value
                }) 
                if(targetInd >= 0){
                    filter[labelSlug][targetInd].selected = true
                }     
            })
        }
    }
    
    function getFilters() {
        const copy: IFilterFreelancer = JSON.parse(JSON.stringify(filtersRes))
        initialFilterSelected(copy, 'cities')
        initialFilterSelected(copy, 'specialities')
        initialFilterSelected(copy, 'priceCategories')
        initialFilterSelected(copy, 'societies')
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

    const isOne = useRef<boolean>(true)
    useEffect(() => {
        if(isOne.current){
            isOne.current = false;
            return
        }
        window.scrollTo({top: 0})
        const copy: IFilterFreelancer = JSON.parse(JSON.stringify(filterFreelancer))
        initialFilterSelected(copy, 'cities')
        initialFilterSelected(copy, 'specialities')
        initialFilterSelected(copy, 'priceCategories')
        initialFilterSelected(copy, 'societies')
        setFilter(copy)
    }, [paramsKey])

    return (
        isLoading
            ?
        <section className={classes.loader}><LoaderContainer /></section>
            :
        <FilterScroll>
            <section className={classes.container}>
                <FilterItem
                    mobile={!forDesk} 
                    label="Город" 
                    labelSlug="cities" 
                    items={filterFreelancer.cities} 
                    selectedFilter={<SelectedFilter items={filterFreelancer.cities} labelSlug={"cities"} />}
                />
                <MyHr />
                <FilterItem 
                    mobile={!forDesk} 
                    label="Специальность" 
                    labelSlug="specialities" 
                    items={filterFreelancer.specialities} 
                    selectedFilter={<SelectedFilter items={filterFreelancer.specialities} labelSlug={"specialities"} />}
                />
                <MyHr />
                <FilterItem 
                    mobile={!forDesk} 
                    label="Ценовая категория" 
                    labelSlug="priceCategories" 
                    items={filterFreelancer.priceCategories} 
                />
                <MyHr />
                <FilterItem 
                    mobile={!forDesk} 
                    label="Работа в соц сетях" 
                    labelSlug="societies" 
                    items={filterFreelancer.societies} 
                />
                <MyHr />
                <ApplyFiltersFreelancers>
                    <PreliminaryFilterCountFreelancers />
                </ApplyFiltersFreelancers>
                <ResetFilters clearParams={clearParamsFilterFreelancer} />
            </section>
        </FilterScroll>
        )
}