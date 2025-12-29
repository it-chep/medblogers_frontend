"use client"

import { FC } from "react";
import { ActiveFilters } from "./ActiveFilters";
import classes from './activeFilters.module.scss'
import { LoaderContainer } from "@/src/shared/ui/loaderContainer";
import { useAppSelector } from "@/src/app/store/store";


export const ActiveFiltersLoading: FC = () => {

    const {isLoading} = useAppSelector(s => s.filterFreelancerReducer)

    return (
        !isLoading
            ?
        <ActiveFilters />
            :
        <section className={classes.loader}><LoaderContainer /></section>
    )
}