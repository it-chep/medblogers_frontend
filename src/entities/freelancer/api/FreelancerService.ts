import { SERVER_URL_API } from "@/src/app/env/env"
import { ISpecialityData } from "../../speciality/model/types"
import { IFreelancerSpeciality } from "../model/types"
import { IItem } from "@/src/shared/model/types"




class FreelancerService {

    async getSpecialities(){
        const response = await fetch(SERVER_URL_API + '/v1/freelancers/specialities_list',                                     
            {
                cache: "no-cache"
            }
        )
        const {specialities}: {specialities: IFreelancerSpeciality[]} = await response.json()
        return specialities
    }

    async getSocialNetworks(){
        const response = await fetch(SERVER_URL_API + '/v1/freelancers/networks_list',                                     
            {
                cache: "no-cache"
            }
        )
        const {socialNetworks}: {socialNetworks: IItem[]} = await response.json()
        return socialNetworks  
    }

} 

export const freelancerService = new FreelancerService()