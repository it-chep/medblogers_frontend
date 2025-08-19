import { SERVER_URL_API } from "@/src/app/env/env"




class PaginationService {

    async get(params: string) {
        const response = await fetch(SERVER_URL_API + '/v1/pages_count' + `?${params}`,
            {
                cache: "no-cache"
            }
        )
        const {pagesCount}: {pagesCount: string} = await response.json()
        return pagesCount
    }

}

export const paginationService = new PaginationService()