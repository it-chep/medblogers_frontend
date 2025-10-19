'use client'

import { doctorService } from "@/src/entities/doctor";
import { IDoctor } from "@/src/entities/doctor/model/types";
import { isDynamicServerError } from "next/dist/client/components/hooks-server-context";
import { FC, useEffect, useState } from "react";
import classes from './image.module.scss'
import { LoaderContainer } from "@/src/shared/ui/loaderContainer";

interface IProps{
    slug: string;
}

export const DoctorImage: FC<IProps> = ({slug}) => {

    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [url, setUrl] = useState<string>('')

    const getData = async () => {
        try{
            setIsLoading(true)
            const doctor: IDoctor = await doctorService.get(slug) 
            setUrl(doctor.image)
        }
        catch(e){
            if (isDynamicServerError(e)) {
                throw e;
            }
            console.log(e)
        }
        finally{
            setIsLoading(false)
        }
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        isLoading
            ?
        <section className={classes.loader}><LoaderContainer /></section>
            :
        <img 
            className={classes.avatar} 
            src={url} 
            height={300} 
            width={300} 
            alt="Фото врача" 
        />
    )
}