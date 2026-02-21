"use client"

import {FC, useCallback, useEffect, useState} from "react";
import {useSearchParams} from "next/navigation";
import {DoctorMiniature, doctorService, IDoctorMiniature} from "@/src/entities/doctor";
import classes from './doctorsAll.module.scss'
import { sortValues } from "@/src/features/sort";
import { SetCitiesSearch } from "@/src/features/setCitiesSearch";
import { SetSpecialitiesSearch } from "@/src/features/setSpecialitiesSearch";
import { scrollingBL } from "@/src/features/checkBlacklist";
import { LoaderContainer } from "@/src/shared/ui/loaderContainer";

export const DoctorsAll: FC = () => {

    const searchParams = useSearchParams()
    const [doctors, setDoctors] = useState<IDoctorMiniature[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(true)

    const checkSearchParams = () => {
        const sortParam = searchParams.get('sort')
        const params = new URLSearchParams(searchParams)
        if(sortParam){
            const isOk = sortValues.find(value => value.value === sortParam)
            if(!isOk){
                params.set('sort', sortValues[0].value)
            }
        }
        return params
    }

    async function getDoctors() {
        try{
            setIsLoading(true)
            const doctorsRes = await doctorService.getAll(checkSearchParams().toString())
            setDoctors(doctorsRes.doctors)
            setTimeout(scrollingBL(), 1)
        }
        catch (e){
            console.log(e)
        }
        finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        getDoctors()
    }, [searchParams])

    const loaderMap = [1, 2, 3, 4, 5, 6];

    return (
        <section className={classes.container}>
            {
                isLoading
                    ?
                loaderMap.map(loader => 
                    <section key={loader} className={classes.loader}>
                        <LoaderContainer />
                    </section>
                )
                    :                
                doctors.map((doctor, ind) =>
                    <DoctorMiniature
                        key={ind}
                        doctor={doctor}
                        setCitiesSearch={
                            <SetCitiesSearch 
                                cities={doctor.city}
                            />
                        }
                        setSpecialitiesSearch={
                            <SetSpecialitiesSearch 
                                specialities={doctor.speciality}
                            />
                        }
                    />
                )
            }
        </section>
    )
}