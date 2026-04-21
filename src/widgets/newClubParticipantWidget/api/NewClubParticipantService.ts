import { IForm, IFormError } from "../model/types"
import { SERVER_URL_API } from "@/src/app/env/env"
import { fetchServer } from "@/src/shared/api/fetchServer"

class NewClubParticipantService {


    async setForm(form: IForm){
        const response = await fetchServer(SERVER_URL_API + '/v1/doctors/create',
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