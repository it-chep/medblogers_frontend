"use client"

import { FC, useEffect, useState } from "react";
import classes from './activeFilters.module.scss'
import { useSearchParams } from "next/navigation";
import { DeleteActiveFilter } from "@/src/features/deleteActiveFilter";
import { FilterBadge } from "@/src/shared/ui/filterBadge";
import { useAppSelector } from "@/src/app/store/store";
import { IItem } from "@/src/shared/model/types";
import { IFilterFreelancer } from "@/src/entities/filterFreelancer";

type TSelectedFilters = 'cities' | 'specialities' | 'societies' | 'priceCategories';

export const ActiveFilters: FC = () => {

    const searchParams = useSearchParams()

    const {filterFreelancer} = useAppSelector(s => s.filterFreelancerReducer)

    const [selectedCheckboxesForCities, setSelectedCheckboxesForCities] = useState<IItem[]>([])
    const [selectedCheckboxesForSpecs, setSelectedCheckboxesForSpecs] = useState<IItem[]>([])
    const [selectedCheckboxesForSocieties, setSelectedCheckboxesForSocieties] = useState<IItem[]>([])
    const [selectedCheckboxesForPriceCategories, setSelectedCheckboxesForPriceCategories] = useState<IItem[]>([])

    const selectedCheckboxes = (label: TSelectedFilters) => {
        const params = new URLSearchParams(searchParams);
        const values = params.getAll(label === 'priceCategories' ? 'price_category' : label)
        let items: IItem[] = []
        if(values){
            values.forEach(value => {
                const elem: IFilterFreelancer[TSelectedFilters][0] | undefined = filterFreelancer[label].find(item => item.id === value)
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
            const societies = selectedCheckboxes('societies')
            const priceCategories = selectedCheckboxes('priceCategories')
            setSelectedCheckboxesForCities([...citites])
            setSelectedCheckboxesForSpecs([...specs])
            setSelectedCheckboxesForSocieties([...societies])
            setSelectedCheckboxesForPriceCategories([...priceCategories])
        }

    }, [filterFreelancer]) 

    return (
        !selectedCheckboxesForCities.length && !selectedCheckboxesForSpecs.length &&
        !selectedCheckboxesForSocieties.length && !selectedCheckboxesForPriceCategories.length
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
            {selectedCheckboxesForSocieties.map((selectedCheckbox, ind) => 
                <FilterBadge 
                    key={ind} 
                    item={selectedCheckbox} 
                    labelSlug="societies" 
                >
                    <DeleteActiveFilter labelSlug="societies" id={selectedCheckbox.id} />
                </FilterBadge>
            )}
            {selectedCheckboxesForPriceCategories.map((selectedCheckbox, ind) => 
                <FilterBadge 
                    key={ind} 
                    item={selectedCheckbox} 
                    labelSlug="price_category" 
                >
                    <DeleteActiveFilter labelSlug="price_category" id={selectedCheckbox.id} />
                </FilterBadge>
            )}
        </section>
    )
}