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
import { ToggleSwitch } from "@/src/shared/ui/toggleSwitch";
import { IFilterFreelancer, useFilterFreelancerActions } from "@/src/entities/filterFreelancer";
import { PreliminaryFilterCountFreelancers } from "@/src/features/preliminaryFilterCountFreelancers";
import { FilterScroll } from "@/src/features/filterScroll/ui/FilterScroll";



interface IProps {
    forDesk: boolean;
    filtersRes: IFilterFreelancer;
}

export const Filters: FC<IProps> = ({forDesk, filtersRes}) => {
    
    const {filterFreelancer, isLoading} = useAppSelector(s => s.filterFreelancerReducer)
    const {setFilter, setExperienceWithDoctors, setIsLoading} = useFilterFreelancerActions()

    const searchParams = useSearchParams()

    const initialFilterSelected = (filter: IFilterFreelancer, labelSlug: keyof IFilterFreelancer) => {
        const params = new URLSearchParams(searchParams);
        const values = params.getAll(labelSlug === 'priceCategories' ? 'price_category' : labelSlug)
        if(labelSlug === 'experience_with_doctors') {
            filter.experience_with_doctors = values[0] === 'true' ? true : false
        }
        else{
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
    }
    
    function getFilters() {
        const copy: IFilterFreelancer = JSON.parse(JSON.stringify(filtersRes))
        initialFilterSelected(copy, 'cities')
        initialFilterSelected(copy, 'specialities')
        initialFilterSelected(copy, 'priceCategories')
        initialFilterSelected(copy, 'societies')
        initialFilterSelected(copy, 'experience_with_doctors')
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
        initialFilterSelected(copy, 'experience_with_doctors')
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
                />
                <MyHr />
                <FilterItem 
                    mobile={!forDesk} 
                    label="Специальность" 
                    labelSlug="specialities" 
                    items={filterFreelancer.specialities} 
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
                <ToggleSwitch 
                    checked={filterFreelancer.experience_with_doctors}
                    label="Опыт работы с врачами"
                    onSelected={setExperienceWithDoctors}
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