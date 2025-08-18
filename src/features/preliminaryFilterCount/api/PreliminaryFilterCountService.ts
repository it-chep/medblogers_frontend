


class PreliminaryFilterCountService {

     async get(params: string) {
        const response = await fetch(process.env.NEXT_PUBLIC_SERVER_URL_API + '/v1/preliminary_filter_count' + (params ? `?${params}` : ''),
            {
                cache: "no-cache"
            }
        )
        const {doctorsCount}: {doctorsCount: string} = await response.json()
        return doctorsCount
    }
}


export const preliminaryFilterCountService = new PreliminaryFilterCountService()