

import { SERVER_URL_API } from "@/src/app/env/env"
import { ISpecialityData } from "../model/types"




class SpecialityService {

    async getSpecialitiesMain(){
        const response = await fetch(SERVER_URL_API + '/v1/main_specialities_list',                                     
            {
                cache: "no-cache"
            }
        )
        const {specialities}: {specialities: ISpecialityData[]} = await response.json()
        return specialities   
    }

    async getSpecialitiesAdditional(){
        const response = await fetch(SERVER_URL_API + '/v1/specialities_list',                                     
            {
                cache: "no-cache"
            }
        )
        const {specialities}: {specialities: ISpecialityData[]} = await response.json()
        return specialities   
    }

}

export const specialityService = new SpecialityService()