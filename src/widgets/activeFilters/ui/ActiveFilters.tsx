"use client"

import { FC, useEffect, useState } from "react";
import classes from './activeFilters.module.scss'
import { useSearchParams } from "next/navigation";
import { DeleteActiveFilter } from "@/src/features/deleteActiveFilter";
import { FilterBadge } from "@/src/shared/ui/filterBadge";
import { IFilter, IItem } from "../model/types";

interface IProps {
    filters: IFilter | null;
}

export const ActiveFilters: FC<IProps> = ({filters}) => {

    const searchParams = useSearchParams()

    const [selectedCheckboxesForCities, setSelectedCheckboxesForCities] = useState<IItem[]>([])
    const [selectedCheckboxesForSpecs, setSelectedCheckboxesForSpecs] = useState<IItem[]>([])

    const selectedCheckboxesCities = () => {
        const params = new URLSearchParams(searchParams);
        const values = params.get('city')?.split(',')
        let cities: IItem[] = []
        if(values){
            values.forEach(value => {
                const elem: HTMLInputElement | null = document.querySelector(`#city-${value} .checkbox_text`)
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
        const values = params.get('speciality')?.split(',')
        let specs: IItem[] = []
        if(values){
            values.forEach(value => {
                const elem: HTMLInputElement | null = document.querySelector(`#speciality-${value} .checkbox_text`)
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
        if(filters){
            const citites = selectedCheckboxesCities()
            const specs = selectedCheckboxesSpecs()
            setSelectedCheckboxesForCities([...citites])
            setSelectedCheckboxesForSpecs([...specs])

        }
    }, [searchParams, filters]) 


    return (
        filters
            ?
        selectedCheckboxesCities.length === 0 && selectedCheckboxesForSpecs.length === 0
            ?
        <></>
            :
        <section className={classes.activeFilters}>
            {selectedCheckboxesForCities.map((selectedCheckbox, ind) => 
                <FilterBadge
                    key={ind} 
                    item={selectedCheckbox} 
                    labelSlug="city" 
                >
                    <DeleteActiveFilter labelSlug="city" id={selectedCheckbox.id} />
                </FilterBadge>
            )}
            {selectedCheckboxesForSpecs.map((selectedCheckbox, ind) => 
                <FilterBadge 
                    key={ind} 
                    item={selectedCheckbox} 
                    labelSlug="speciality" 
                >
                    <DeleteActiveFilter labelSlug="speciality" id={selectedCheckbox.id} />
                </FilterBadge>
            )}
        </section>
            :
        <section>Loading...</section>
    )
}