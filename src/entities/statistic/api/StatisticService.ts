import { SERVER_URL_API } from "@/src/app/env/env"
import { fetchServer } from "@/src/shared/api/fetchServer"
import { IStatistic } from "../model/types"


class StatisticService {

    async get(): Promise<IStatistic>{

        const response = await fetchServer(SERVER_URL_API + '/v1/counters_info',
            {
                cache: "no-cache"
            }
        )
        
        const statistics: IStatistic = await response.json()
        return statistics
    }

}


export const statisticService = new StatisticService()
