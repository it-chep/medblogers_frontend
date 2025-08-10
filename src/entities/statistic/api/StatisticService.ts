import { IStatistic } from "../model/types"


class StatisticService {

    async get(): Promise<IStatistic>{

        const response = await fetch(process.env.NEXT_PUBLIC_SERVER_URL_API + '/v1/statistics/',
            {
                cache: "no-cache"
            }
        )
        
        const statistics: IStatistic = await response.json()
        return statistics
    }

}


export const statisticService = new StatisticService()