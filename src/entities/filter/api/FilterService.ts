import { IFilter } from "../model/types"

class FilterService {


    async getAll(): Promise<IFilter> {
        
        const response = await fetch(process.env.NEXT_PUBLIC_SERVER_URL_API + '/v1/settings',
            {
                cache: "no-cache"
            }
        )
        const filters: IFilter = await response.json()
        return filters
    }

}

export const filterService = new FilterService()