
"use client"

import { clearParams } from "@/src/entities/filter";
import { MyButton } from "@/src/shared/ui/myButton";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { FC } from "react";
import classes from './resetFilters.module.scss'


export const ResetFilters: FC = () => {

    const searchParams = useSearchParams()
    const pathname = usePathname()
    const router = useRouter()


    const setNewUrl = (params: URLSearchParams) => {
        const newUrl = `${pathname}?${params.toString()}`
        router.push(newUrl)
    }

    const resetFilterCheckboxes = () => {

        const cities: NodeListOf<HTMLInputElement> = document.querySelectorAll('.city input')
        cities.forEach(city => {
            city.checked = false
        })

        const specs: NodeListOf<HTMLInputElement> = document.querySelectorAll('.speciality input')
        specs.forEach(speciality => {
            speciality.checked = false
        })
    }
 
    const reset = () => {
        const params = new URLSearchParams(searchParams);
        clearParams(params)
        resetFilterCheckboxes()
        setNewUrl(params)
    }   

    return (
        <section className={classes.resetFilters}>
            <MyButton grayStyle={true} onClick={reset}>Сбросить</MyButton>
        </section>
    )
}