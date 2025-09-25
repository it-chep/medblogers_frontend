"use client"

import { MyButton } from "@/src/shared/ui/myButton";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { FC, PropsWithChildren } from "react";
import classes from './applyFilters.module.scss'
import { useAppSelector } from "@/src/app/store/store";
import { clearParamsFilterFreelancer } from "@/src/shared/lib/helpers/clearParamsFilterFreelancer";


export const ApplyFiltersFreelancers: FC<PropsWithChildren> = ({children}) => {

    const searchParams = useSearchParams()
    const pathname = usePathname()
    const router = useRouter()

    const {filterFreelancer} = useAppSelector(s => s.filterFreelancerReducer)

    const selectedCities = () => {
        const selectedIds = filterFreelancer.cities.filter(city => city.selected).map(city => city.id)
        return selectedIds
    }

    const selectedSpecialities = () => {
        const selectedIds = filterFreelancer.specialities.filter(speciality => speciality.selected).map(speciality => speciality.id)
        return selectedIds
    }

    const selectedSocieties = () => {
        const selectedIds = filterFreelancer.societies.filter(society => society.selected).map(society => society.id)
        return selectedIds
    }

    const selectedPriceCategories = () => {
        const selectedIds = filterFreelancer.priceCategories.filter(priceCategory => priceCategory.selected).map(priceCategory => priceCategory.id)
        return selectedIds
    }

    const setNewUrl = (params: URLSearchParams) => {
        const newUrl = `${pathname}?${params.toString()}`
        router.push(newUrl)
    }

    const apply = () => {
        const params = new URLSearchParams(searchParams);
        clearParamsFilterFreelancer(params)

        const selectedCitiesIds = selectedCities()
        const selectedSpecialitiesIds = selectedSpecialities()
        const selectedPriceCategoriesIds = selectedPriceCategories()
         const selectedSocietiesIds = selectedSocieties()

        if(selectedCitiesIds.length > 0){
            selectedCitiesIds.forEach(cityId => {
                params.append('cities', cityId);
            })
        }
        if(selectedSpecialitiesIds.length > 0){
            selectedSpecialitiesIds.forEach(specialityId => {
                params.append('specialities', specialityId);
            })
        }
        if(selectedPriceCategoriesIds.length > 0){
            selectedPriceCategoriesIds.forEach(priceCategoryId => {
                params.append('price_category', priceCategoryId);
            })
        }
        if(selectedSocietiesIds.length > 0){
            selectedSocietiesIds.forEach(societyId => {
                params.append('societies', societyId);
            })
        }

        if(filterFreelancer.experience_with_doctors){
            params.append('experience_with_doctors', String(filterFreelancer.experience_with_doctors))
        }

        setNewUrl(params)
    }   

    return (
        <section className={classes.container}>
            <MyButton onClick={apply}>Применить {children}</MyButton>
        </section>
    )
}