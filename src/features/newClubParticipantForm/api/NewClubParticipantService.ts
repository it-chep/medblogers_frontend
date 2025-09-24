import { IFormError, IFormReq } from "../model/types"
import { SERVER_URL_API } from "@/src/app/env/env"

class NewClubParticipantService {


    async setForm(form: IFormReq){
        const response = await fetch(SERVER_URL_API + '/v1/doctors/create',
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