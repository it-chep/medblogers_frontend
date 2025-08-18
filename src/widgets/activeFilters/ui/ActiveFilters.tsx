"use client"

import { FC, useEffect, useState } from "react";
import classes from './activeFilters.module.scss'
import { useSearchParams } from "next/navigation";
import { DeleteActiveFilter } from "@/src/features/deleteActiveFilter";
import { FilterBadge } from "@/src/shared/ui/filterBadge";
import { IItem } from "../model/types";
import { useAppSelector } from "@/src/app/store/store";


export const ActiveFilters: FC = () => {

    const searchParams = useSearchParams()

    const {filter} = useAppSelector(s => s.filterReducer)

    const [selectedCheckboxesForCities, setSelectedCheckboxesForCities] = useState<IItem[]>([])
    const [selectedCheckboxesForSpecs, setSelectedCheckboxesForSpecs] = useState<IItem[]>([])

    const selectedCheckboxesCities = () => {
        const params = new URLSearchParams(searchParams);
        const values = params.getAll('cities')
        let cities: IItem[] = []
        if(values){
            values.forEach(value => {
                const elem: HTMLInputElement | null = document.querySelector(`#cities-${value} .checkbox_text`)
                if(elem){
                    cities.push({
                        id: +value,
                        name: elem.innerHTML.replace(/\s*\([^)]*\)/g, '')
                    })
                }
            })
        }
        return cities
    }

    const selectedCheckboxesSpecs = () => {
        const params = new URLSearchParams(searchParams);
        const values = params.getAll('specialities')
        let specs: IItem[] = []
        if(values){
            values.forEach(value => {
                const elem: HTMLInputElement | null = document.querySelector(`#specialities-${value} .checkbox_text`)
                if(elem){
                    specs.push({
                        id: +value,
                        name: elem.innerHTML.replace(/\s*\([^)]*\)/g, '')
                    })
                }
            })
        }
        return specs
    }

    useEffect(() => {
        if(filter){
            const citites = selectedCheckboxesCities()
            const specs = selectedCheckboxesSpecs()
            setSelectedCheckboxesForCities([...citites])
            setSelectedCheckboxesForSpecs([...specs])
        }

    }, [searchParams]) 

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