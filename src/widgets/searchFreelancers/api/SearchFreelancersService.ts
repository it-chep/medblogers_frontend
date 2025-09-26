import { SERVER_URL_API } from "@/src/app/env/env";
import { ISearchFreelancers } from "@/src/entities/freelancer";

class SearchFreelancersService{

    controller: null | AbortController = null; 

    async get(query: string): Promise<ISearchFreelancers>{

        if(this.controller){
            this.controller.abort()
        }

        this.controller = new AbortController()

        const res = await fetch(SERVER_URL_API + '/v1/freelancers/search' + `?query=${query}`, {

            cache: 'no-cache',
            signal: this.controller?.signal
        })

        this.controller = null;

        const response: ISearchFreelancers = await res.json()

        return response
    }


}

export const searchFreelancersService = new SearchFreelancersService()