import { SERVER_URL_API } from "@/src/app/env/env"
import { fetchServer } from "@/src/shared/api/fetchServer"
import { ICityData } from "../model/types"




class CityService {

    async getCities(){
        const response = await fetchServer(SERVER_URL_API + '/v1/cities_list',                                     
            {
                cache: "no-cache"
            }
        )   
        const {cities}: {cities: ICityData[]} = await response.json()
        return cities   
    }

    
}

export const cityService = new CityService()