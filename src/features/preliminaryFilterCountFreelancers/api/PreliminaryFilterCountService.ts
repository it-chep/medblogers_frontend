import { SERVER_URL_API } from "@/src/app/env/env"
import { fetchServer } from "@/src/shared/api/fetchServer"



class PreliminaryFilterCountService {

    async get(params: string) {
        const response = await fetchServer(SERVER_URL_API + '/v1/freelancers/preliminary_filter_count' + (params ? `?${params}` : ''),
            {
                cache: "no-cache"
            }
        )
        const {freelancersCount}: {freelancersCount: string} = await response.json()
        return freelancersCount
    }
}


export const preliminaryFilterCountFreelancersService = new PreliminaryFilterCountService()