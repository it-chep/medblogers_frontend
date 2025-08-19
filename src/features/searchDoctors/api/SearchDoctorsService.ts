import { SERVER_URL_API } from "@/src/app/env/env";
import { ISearchDoctors } from "../model/types"

class SearchDoctorsService{

    controller: null | AbortController = null; 

    async get(query: string): Promise<ISearchDoctors>{

        if(this.controller){
            this.controller.abort()
        }

        this.controller = new AbortController()

        const res = await fetch(SERVER_URL_API + '/v1/search-doctors' + `?query=${query}`, {

            cache: 'no-cache',
            signal: this.controller?.signal
        })

        this.controller = null;

        const response: ISearchDoctors = await res.json()

        return response
    }


}

export const searchDoctorsService = new SearchDoctorsService()