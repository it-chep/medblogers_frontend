"use client"

import {FC, useEffect, useState} from "react";
import {useSearchParams} from "next/navigation";
import {DoctorMiniature, doctorService, IDoctorMiniature} from "@/src/entities/doctor";
import classes from './doctorsAll.module.scss'
import { LoaderSpinner } from "@/src/shared/ui/loaderSpinner";
import { sortValues } from "@/src/features/sort";
import { SetCitiesSearch } from "@/src/features/setCitiesSearch";
import { SetSpecialitiesSearch } from "@/src/features/setSpecialitiesSearch";

export const DoctorsAll: FC = () => {

    const searchParams = useSearchParams()
    const [doctors, setDoctors] = useState<IDoctorMiniature[]>([])
    const [totalPages, setTotalPages] = useState<number | null>(null)
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
            setTotalPages(doctorsRes.pages)
            setDoctors(doctorsRes.doctors)
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

    return (
        <section>
            <section className={classes.container}>
                {
                    isLoading
                        ?
                    <section className={classes.loader}><LoaderSpinner /></section>
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
        </section>
    )
}