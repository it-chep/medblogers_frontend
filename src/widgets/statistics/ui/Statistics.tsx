import { IStatistic, StatisticItem, statisticService } from "@/src/entities/statistic";
import { FC, useEffect, useState } from "react";
import classes from './statistics.module.scss'



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
                <section>Loading...</section>
                    :
                <>
                    { 
                        statistics?.doctors_count 
                            && 
                        <StatisticItem 
                            label="Врачей в базе:" 
                            count={String(statistics.doctors_count)} 
                        /> 
                    }
                    { 
                        statistics?.subscribers_count 
                            && 
                        <StatisticItem 
                            label={"Общее количество " + statistics.subscribers_count_text + " у врачей:"} 
                            count={statistics.subscribers_count} 
                        /> 
                    }
                </>
            }
        </section>
    )
}