"use client"

import { clearParams } from "@/src/shared/lib/helpers/clearParams";
import { MyButton } from "@/src/shared/ui/myButton";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { FC, PropsWithChildren } from "react";
import classes from './applyFilters.module.scss'
import { useAppSelector } from "@/src/app/store/store";

interface IProps {
    currentMin: number;
    currentMax: number;
}

export const ApplyFilters: FC<IProps & PropsWithChildren> = ({currentMax, currentMin, children}) => {

    const searchParams = useSearchParams()
    const pathname = usePathname()
    const router = useRouter()

    const {filter} = useAppSelector(s => s.filterReducer)

    const selectedCities = () => {
        const selectedIds = filter.cities.filter(city => city.selected).map(city => city.id)
        return selectedIds
    }

    const selectedSpecialities = () => {
        const selectedIds = filter.specialities.filter(speciality => speciality.selected).map(speciality => speciality.id)
        return selectedIds
    }

    const selectedSubs = () => {
        const selectedIds = filter.filterInfo.filter(info => info.selected).map(info => info.slug)
        return selectedIds
    }

    const setNewUrl = (params: URLSearchParams) => {
        const newUrl = `${pathname}?${params.toString()}`
        router.push(newUrl)
    }

    const apply = () => {
        const params = new URLSearchParams(searchParams);
        clearParams(params)

        const selectedCitiesIds = selectedCities()
        const selectedSpecialitiesIds = selectedSpecialities()
        const selectedSubsIds = selectedSubs()

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
        if(selectedSubsIds.length > 0){
            selectedSubsIds.forEach(subId => {
                params.append('social_media', subId);
            })
        }

        params.set('min_subscribers', String(currentMin))
        params.set('max_subscribers', String(currentMax))

        setNewUrl(params)
    }   

    return (
        <section className={classes.container}>
            <MyButton onClick={apply}>Применить {children}</MyButton>
        </section>
    )
}