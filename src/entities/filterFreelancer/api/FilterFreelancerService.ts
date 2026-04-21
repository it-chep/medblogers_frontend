import { SERVER_URL_API } from "@/src/app/env/env"
import { fetchServer } from "@/src/shared/api/fetchServer"
import { IFilterFreelancer } from "../model/types"

class FilterFreelancerService {


    async getAll(): Promise<IFilterFreelancer> {
        const response = await fetchServer(SERVER_URL_API + '/v1/freelancers/settings',
            {
                cache: "no-cache"
            }
        )
        const filters: IFilterFreelancer = await response.json()
        return filters
    }

}

export const filterFreelancerService = new FilterFreelancerService()