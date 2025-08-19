import { SERVER_URL_API } from "@/src/app/env/env"



class PreliminaryFilterCountService {

     async get(params: string) {
        const response = await fetch(SERVER_URL_API + '/v1/preliminary_filter_count' + (params ? `?${params}` : ''),
            {
                cache: "no-cache"
            }
        )
        const {doctorsCount}: {doctorsCount: string} = await response.json()
        return doctorsCount
    }
}


export const preliminaryFilterCountService = new PreliminaryFilterCountService()