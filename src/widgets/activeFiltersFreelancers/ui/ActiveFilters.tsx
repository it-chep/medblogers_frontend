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
                    item={{...selectedCheckbox, name: ''}} 
                    labelSlug="price_category" 
                >
                    <>
                        <section className={classes.rubs}>
                            {selectedCheckbox.name.split('').map((price, ind) => 
                                <svg key={price + ind} className={classes.rub} width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.00161 8.64171H4.37446V10.3935H9.46483V11.7536H4.37446V14H1.96323V11.7536H0.644262V10.3935H1.96323V8.64171H0.644262V6.7457H1.96323V0.253921H8.00161C10.8868 0.253921 12.4943 2.19115 12.4943 4.45812C12.4943 6.72509 10.8662 8.64171 8.00161 8.64171ZM4.37446 2.37663V6.7457H7.67187C9.03205 6.7457 10.0213 5.88013 10.0213 4.56116C10.0213 3.2422 9.03205 2.37663 7.67187 2.37663H4.37446Z"/>
                                </svg>
                            )}
                        </section>
                        <DeleteActiveFilter labelSlug="price_category" id={selectedCheckbox.id} />
                    </>
                </FilterBadge>
            )}
        </section>
    )
}