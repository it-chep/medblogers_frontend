"use client"

import { FC, useEffect, useState } from "react";
import classes from './activeFilters.module.scss'
import { useSearchParams } from "next/navigation";
import { DeleteActiveFilter } from "@/src/features/deleteActiveFilter";
import { FilterBadge } from "@/src/shared/ui/filterBadge";
import { IItem } from "../model/types";
import { useAppSelector } from "@/src/app/store/store";
import { IFilter } from "@/src/entities/filter";


export const ActiveFilters: FC = () => {

    const searchParams = useSearchParams()

    const {filter} = useAppSelector(s => s.filterReducer)

    const [selectedCheckboxesForCities, setSelectedCheckboxesForCities] = useState<IItem[]>([])
    const [selectedCheckboxesForSpecs, setSelectedCheckboxesForSpecs] = useState<IItem[]>([])
    const [selectedCheckboxesForAdvertising, setSelectedCheckboxesForAdvertising] = useState<IItem[]>([])

    const selectedCheckboxes = (label: 'cities' | 'specialities') => {
        const params = new URLSearchParams(searchParams);
        const values = params.getAll(label)
        let items: IItem[] = []
        if(values){
            values.forEach(value => {
                const elem: IFilter['cities' | 'specialities'][0] | undefined = filter[label].find(item => item.id === value)
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

    const selectedAdvertising = () => {
        return filter.advertising
            .filter(item => searchParams.get(item.slug) === 'true')
            .map(item => ({
                id: item.slug,
                name: item.name
            }))
    }

    useEffect(() => {
        const citites = selectedCheckboxes('cities')
        const specs = selectedCheckboxes('specialities')
        const advertising = selectedAdvertising()
        setSelectedCheckboxesForCities([...citites])
        setSelectedCheckboxesForSpecs([...specs])
        setSelectedCheckboxesForAdvertising([...advertising])
    }, [searchParams]) 

    return (
        selectedCheckboxesForCities.length === 0 && selectedCheckboxesForSpecs.length === 0 && selectedCheckboxesForAdvertising.length === 0
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
            {selectedCheckboxesForAdvertising.map((selectedCheckbox, ind) =>
                <FilterBadge
                    key={`advertising-${ind}`}
                    item={selectedCheckbox}
                    labelSlug={String(selectedCheckbox.id)}
                >
                    <DeleteActiveFilter labelSlug={String(selectedCheckbox.id)} />
                </FilterBadge>
            )}
        </section>
    )
}
