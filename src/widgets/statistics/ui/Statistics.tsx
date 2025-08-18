"use client"

import { IStatistic, StatisticItem, statisticService } from "@/src/entities/statistic";
import { FC, useEffect, useState } from "react";
import classes from './statistics.module.scss'
import { LoaderContainer } from "@/src/shared/ui/loaderContainer";

// ISR надо

export const Statistics: FC = () => {

    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [statistics, setStatistic] = useState<IStatistic | null>(null)

    const getStatistics = async () => {
        try{
            setIsLoading(true)
            const statisticsRes = await statisticService.get()
            setStatistic(statisticsRes)
        }
        catch(e){
            console.log(e)
        }
        finally{
            setIsLoading(false)
        }
    }

    useEffect(() => {
        getStatistics()
    }, [])

    return (
        <section className={classes.wrapper}>
            {
                isLoading
                    ?
                <section className={classes.loader}><LoaderContainer /></section>
                    :
                <>
                    { 
                        statistics?.doctorsCount 
                            && 
                        <StatisticItem 
                            label="Врачей в базе" 
                            count={String(statistics.doctorsCount)} 
                        /> 
                    }
                    { 
                        statistics?.subscribersCount 
                            && 
                        <StatisticItem 
                            label={"Общее количество подписчиков у врачей"} 
                            count={statistics.subscribersCount} 
                        /> 
                    }
                </>
            }
        </section>
    )
}