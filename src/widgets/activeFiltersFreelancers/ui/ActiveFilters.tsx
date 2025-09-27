"use client"

import { FC, useEffect, useState } from "react";
import classes from './activeFilters.module.scss'
import { useSearchParams } from "next/navigation";
import { DeleteActiveFilter } from "@/src/features/deleteActiveFilter";
import { FilterBadge } from "@/src/shared/ui/filterBadge";
import { useAppSelector } from "@/src/app/store/store";
import { IItem } from "@/src/shared/model/types";
import { IFilterFreelancer } from "@/src/entities/filterFreelancer";


export const ActiveFilters: FC = () => {

    const searchParams = useSearchParams()

    const {filterFreelancer} = useAppSelector(s => s.filterFreelancerReducer)

    const [selectedCheckboxesForCities, setSelectedCheckboxesForCities] = useState<IItem[]>([])
    const [selectedCheckboxesForSpecs, setSelectedCheckboxesForSpecs] = useState<IItem[]>([])

    const selectedCheckboxes = (label: 'cities' | 'specialities') => {
        const params = new URLSearchParams(searchParams);
        const values = params.getAll(label)
        let items: IItem[] = []
        if(values){
            values.forEach(value => {
                const elem: IFilterFreelancer['cities' | 'specialities'][0] | undefined = filterFreelancer[label].find(item => item.id === value)
                if(elem){
                    items.push({
                        id: +value,
                        name: elem.name.replace(/\s*\([^)]*\)/g, '')
                    })
                }
            })
        }
        return items
    }

    useEffect(() => {
        if(filterFreelancer){
            const citites = selectedCheckboxes('cities')
            const specs = selectedCheckboxes('specialities')
            setSelectedCheckboxesForCities([...citites])
            setSelectedCheckboxesForSpecs([...specs])
        }

    }, [filterFreelancer]) 

    return (
        selectedCheckboxesForCities.length === 0 && selectedCheckboxesForSpecs.length === 0
            ?
        <></>
            :
        <section className={classes.activeFilters}>
            {selectedCheckboxesForCities.map((selectedCheckbox, ind) => 
                <FilterBadge
                    key={ind} 
                    item={selectedCheckbox} 
                    labelSlug="cities" 
                >
                    <DeleteActiveFilter labelSlug="cities" id={selectedCheckbox.id} />
                </FilterBadge>
            )}
            {selectedCheckboxesForSpecs.map((selectedCheckbox, ind) => 
                <FilterBadge 
                    key={ind} 
                    item={selectedCheckbox} 
                    labelSlug="specialities" 
                >
                    <DeleteActiveFilter labelSlug="specialities" id={selectedCheckbox.id} />
                </FilterBadge>
            )}
        </section>
    )
}