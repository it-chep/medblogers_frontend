import { ICityData } from "@/src/entities/city"
import { ISpecialityData } from "@/src/entities/speciality/model/types"
import { IFormError, IFormReq } from "../model/types"

class NewClubParticipantService {

    async getCities(){
        const response = await fetch(process.env.NEXT_PUBLIC_SERVER_URL_API + '/v1/cities_list',                                     
            {
                cache: "no-cache"
            }
        )
                
        const {cities}: {cities: ICityData[]} = await response.json()
        return cities   
    }

    
    async getSpecialities(){
        const response = await fetch(process.env.NEXT_PUBLIC_SERVER_URL_API + '/v1/specialities_list',                                     
            {
                cache: "no-cache"
            }
        )
        const {specialities}: {specialities: ISpecialityData[]} = await response.json()
        return specialities   
    }

    async setForm(form: IFormReq){
        const response = await fetch(process.env.NEXT_PUBLIC_SERVER_URL_API + '/v1/doctors/create',
            {
                method: 'POST',
                body: JSON.stringify(form),
                cache: 'no-cache'
            }
        )

        const data: {errors: IFormError[]} = await response.json()
        return data

    }

    
}

export const newClubParticipantService = new NewClubParticipantService()