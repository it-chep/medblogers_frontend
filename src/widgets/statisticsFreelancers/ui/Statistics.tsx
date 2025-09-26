import { StatisticItem } from "@/src/entities/statistic";
import classes from './statistics.module.scss'
import { isDynamicServerError } from "next/dist/client/components/hooks-server-context";
import { freelancerService, IStatisticFreelancers } from "@/src/entities/freelancer";

// ISR надо


const getData = async () => {
    let statistics: IStatisticFreelancers | null = null;
    try{
        statistics = await freelancerService.getStatistics() 
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
                statistics?.freelancersCount 
                    && 
                <StatisticItem 
                    label="Специалистов в базе " 
                    count={String(statistics.freelancersCount)} 
                /> 
            }
        </section>
    )
}