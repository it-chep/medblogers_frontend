import { SERVER_URL_API } from "@/src/app/env/env"
import { ISpecialityData } from "../../speciality/model/types"
import { IFreelancer, IFreelancerCity, IFreelancerMiniature, IFreelancerSeo, IFreelancerSpeciality, IStatisticFreelancers } from "../model/types"
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

    async getCities(){
        const response = await fetch(SERVER_URL_API + '/v1/freelancers/cities_list',                                     
            {
                cache: "no-cache"
            }
        )   
        const {cities}: {cities: IFreelancerCity[]} = await response.json()
        return cities   
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

    async getAll(params: string): Promise<IFreelancerMiniature[]> {
        const response = await fetch(SERVER_URL_API + '/v1/freelancers/filter' + (params ? `?${params}` : ''),
            {
                cache: "no-cache"
            }
        )
        const {freelancers}: {freelancers: IFreelancerMiniature[]} = await response.json()
        return freelancers
    }

    
    async getStatistics(): Promise<IStatisticFreelancers> {
        const response = await fetch(SERVER_URL_API + '/v1/freelancers/counters_info',
            {
                cache: "no-cache"
            }
        )
        const statistics = await response.json()
        return statistics
    }

    async get(slug: string): Promise<IFreelancer> {
        const response = await fetch(SERVER_URL_API + '/v1/freelancers/card/' + slug,
            {
                cache: "no-store"
            }
        )
        const freelancer = await response.json()
        return freelancer
    }

    async seo(slug: string){
        const response = await fetch(SERVER_URL_API + '/v1/freelancers/seo/' + slug,
            {
                cache: 'no-store',
            }
        )
        const seo: IFreelancerSeo = await response.json()
        return seo
    }

} 

export const freelancerService = new FreelancerService()