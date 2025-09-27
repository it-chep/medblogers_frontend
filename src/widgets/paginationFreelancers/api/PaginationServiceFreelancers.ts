import { SERVER_URL_API } from "@/src/app/env/env"




class PaginationServiceFreelancers {

    async get(params: string) {
        const response = await fetch(SERVER_URL_API + '/v1/freelancers/pages_count' + `?${params}`,
            {
                cache: "no-cache"
            }
        )
        const {pagesCount}: {pagesCount: string} = await response.json()
        return pagesCount
    }

}

export const paginationServiceFreelancers = new PaginationServiceFreelancers()