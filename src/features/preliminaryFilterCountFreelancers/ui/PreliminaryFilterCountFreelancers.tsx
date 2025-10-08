import { useAppSelector } from "@/src/app/store/store"
import { FC, useEffect, useRef, useState } from "react"
import { preliminaryFilterCountFreelancersService } from "../api/PreliminaryFilterCountService"


export const PreliminaryFilterCountFreelancers: FC = () => {

    const [count, setCount] = useState<string>('')
    const {filterFreelancer} = useAppSelector(s => s.filterFreelancerReducer)
    
    const getParams = () => {
        const searchParams = new URLSearchParams()
        
        const cities = filterFreelancer.cities.filter(city => city.selected)
        const specialities = filterFreelancer.specialities.filter(speciality => speciality.selected)
        const societies = filterFreelancer.societies.filter(society => society.selected)
        const priceCategories = filterFreelancer.priceCategories.filter(priceCategory => priceCategory.selected)
        const experienceWithDoctors = filterFreelancer.experience_with_doctors;

        cities.forEach(city => {
            searchParams.append('cities', city.id)
        })
        specialities.forEach(speciality => {
            searchParams.append('specialities', speciality.id)
        })
        societies.forEach(society => {
            searchParams.append('societies', society.id)
        })
        priceCategories.forEach(priceCategory => {
            searchParams.append('price_category', priceCategory.id)
        })
        if(experienceWithDoctors){
            searchParams.append('experience_with_doctors', 'true')
        }
        return searchParams
    }

    const getCount = async () => {
        const data = await preliminaryFilterCountFreelancersService.get(getParams().toString())
        setCount(data)
    }

    const isOne = useRef<boolean>(true)
    useEffect(() => {
        if(isOne.current){
            isOne.current = false;
            return
        }
        getCount()
    }, [filterFreelancer])

    return (
        <span>
            { count && <>({count})</> }
        </span>
    )
}