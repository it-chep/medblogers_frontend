"use client"

import {FC, useEffect, useState} from "react";
import {useSearchParams} from "next/navigation";
import {DoctorMiniature, doctorService, IDoctorMiniature} from "@/src/entities/doctor";
import classes from './doctorsAll.module.scss'
import { LoaderSpinner } from "@/src/shared/ui/loaderSpinner";
import { Pagination } from "@/src/features/pagination";

export const DoctorsAll: FC = () => {

    const searchParams = useSearchParams()
    const [doctors, setDoctors] = useState<IDoctorMiniature[]>([])
    const [totalPages, setTotalPages] = useState<number | null>(null)
    const [isLoading, setIsLoading] = useState<boolean>(true)


    async function getDoctors() {
        try{
            setIsLoading(true)
            const doctorsRes = await doctorService.getAll(searchParams.toString())
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
                    doctors?.map((doctor, ind) =>
                        <DoctorMiniature
                            key={ind}
                            image={doctor.image}
                            city={doctor.city}
                            instLink={doctor.instLink}
                            instSubsCount={doctor.instSubsCount}
                            instSubsCountText={doctor.instSubsCountText}
                            name={doctor.name}
                            slug={doctor.slug}
                            speciality={doctor.speciality}
                            tgLink={doctor.tgLink}
                            tgSubsCount={doctor.tgSubsCount}
                            tgSubsCountText={doctor.tgSubsCountText}
                        />
                    )
                }
            </section>
        </section>
    )
}