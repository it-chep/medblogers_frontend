



class PaginationService {

    async get(params: string) {
        const response = await fetch(process.env.NEXT_PUBLIC_SERVER_URL_API + '/v1/pages_count' + `?${params}`,
            {
                cache: "no-cache"
            }
        )
        const {pagesCount}: {pagesCount: string} = await response.json()
        return pagesCount
    }

}

export const paginationService = new PaginationService()