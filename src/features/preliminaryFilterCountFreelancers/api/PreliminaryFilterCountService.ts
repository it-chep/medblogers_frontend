import { SERVER_URL_API } from "@/src/app/env/env"



class PreliminaryFilterCountService {

    async get(params: string) {
        const response = await fetch(SERVER_URL_API + '/v1/freelancers/preliminary_filter_count' + (params ? `?${params}` : ''),
            {
                cache: "no-cache"
            }
        )
        const {freelancersCount}: {freelancersCount: string} = await response.json()
        return freelancersCount
    }
}


export const preliminaryFilterCountFreelancersService = new PreliminaryFilterCountService()