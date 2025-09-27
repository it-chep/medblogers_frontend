"use client"

import { FC, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

import classes from './freelancersAll.module.scss'
import { LoaderSpinner } from "@/src/shared/ui/loaderSpinner";
import { sortValues } from "@/src/features/sort";
import { FreelancerMiniature, freelancerService, IFreelancerMiniature } from '@/src/entities/freelancer';

export const FreelancersAll: FC = () => {

    const searchParams = useSearchParams()
    const [freelancers, setFreelancers] = useState<IFreelancerMiniature[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(true)

    const checkSearchParams = () => {
        const sortParam = searchParams.get('sort')
        const params = new URLSearchParams(searchParams)
        // if(sortParam){
        //     const isOk = sortValues.find(value => value.value === sortParam)
        //     if(!isOk){
        //         params.set('sort', sortValues[0].value)
        //     }
        // }
        return params
    }

    async function getDoctors() {
        try{
            setIsLoading(true)
            const freelancersRes = await freelancerService.getAll(checkSearchParams().toString())
            setFreelancers(freelancersRes)
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
                    freelancers.map(freelancer =>
                        <FreelancerMiniature 
                            key={freelancer.slug}
                            freelancer={freelancer}
                        />
                    )
                }
            </section>
        </section>
    )
}