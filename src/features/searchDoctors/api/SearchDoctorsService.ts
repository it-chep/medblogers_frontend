import { ISearchDoctors } from "../model/types"

class SearchDoctorsService{

    controller: null | AbortController = null; 

    async get(query: string): Promise<ISearchDoctors>{

        if(this.controller){
            console.log(1111111)
            this.controller.abort()
        }

        this.controller = new AbortController()

        const res = await fetch(process.env.NEXT_PUBLIC_SERVER_URL_API + '/v1/search-doctors' + `?query=${query}`, {
            cache: 'no-cache',
            signal: this.controller?.signal
        })

        this.controller = null;

        const response: ISearchDoctors = await res.json()

        return response
    }


}

export const searchDoctorsService = new SearchDoctorsService()