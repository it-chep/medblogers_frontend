import { IStatistic } from "../model/types"



const STATISTICS: IStatistic = {
    doctors_count: 373,
    subscribers_count: "4 391 516",
    subscribers_count_text: "подписчиков"
}


class StatisticService {

    async get(): Promise<IStatistic>{




        return STATISTICS
    }

}


export const statisticService = new StatisticService()