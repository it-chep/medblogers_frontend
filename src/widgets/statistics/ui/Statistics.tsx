import { IStatistic, StatisticItem, statisticService } from "@/src/entities/statistic";
import classes from './statistics.module.scss'
import { isDynamicServerError } from "next/dist/client/components/hooks-server-context";

const getData = async () => {
    let statistics: IStatistic | null = null;
    try{
        statistics = await statisticService.get() 
    }
    catch(e){
        if (isDynamicServerError(e)) {
            throw e;
        }
        console.log(e)
    }
    return statistics
}

export default async function Statistics() {

    const statistics = await getData()

    return (
        <section className={classes.wrapper}>
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
        </section>
    )
}