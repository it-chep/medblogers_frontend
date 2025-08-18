import { IStatistic } from "../model/types"


class StatisticService {

    async get(): Promise<IStatistic>{

        const response = await fetch(process.env.NEXT_PUBLIC_SERVER_URL_API + '/v1/counters_info',
            {
                next: {revalidate: 60}
            }
        )
        
        const statistics: IStatistic = await response.json()
        return statistics
    }

}


export const statisticService = new StatisticService()