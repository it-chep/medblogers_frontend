import { FC, useEffect, useState } from "react";
import { preliminaryFilterCountService } from "../api/PreliminaryFilterCountService";
import { useAppSelector } from "@/src/app/store/store";
import classes from './preliminaryFilterCount.module.scss'


export const PreliminaryFilterCount: FC = () => {

    const [count, setCount] = useState<string>('')
    const {filter} = useAppSelector(s => s.filterReducer)
    
    const getParams = () => {
        const searchParams = new URLSearchParams()
        
        const cities = filter.cities.filter(city => city.selected)
        const specialities = filter.specialities.filter(speciality => speciality.selected)
        const filterInfo = filter.filterInfo.filter(info => info.selected)

        cities.forEach(city => {
            searchParams.append('cities', city.id)
        })
        specialities.forEach(speciality => {
            searchParams.append('specialities', speciality.id)
        })
        filterInfo.forEach(info => {
            searchParams.append('social_media', info.slug)
        })
        searchParams.append('min_subscribers', filter.minSubscribers)
        searchParams.append('max_subscribers', filter.maxSubscribers)
        return searchParams
    }

    const getCount = async () => {
        const data = await preliminaryFilterCountService.get(getParams().toString())
        setCount(data)
    }

    useEffect(() => {
        getCount()
    }, [filter])

    return (
        <span className={classes.container}>
            { count && <>({count})</> }
        </span>
    )
}