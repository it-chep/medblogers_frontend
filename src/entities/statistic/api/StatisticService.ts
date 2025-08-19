import { SERVER_URL_API } from "@/src/app/env/env"
import { IStatistic } from "../model/types"


class StatisticService {

    async get(): Promise<IStatistic>{

        const response = await fetch(SERVER_URL_API + '/v1/counters_info',
            {
                next: {revalidate: 60}
            }
        )
        
        const statistics: IStatistic = await response.json()
        return statistics
    }

}


export const statisticService = new StatisticService()