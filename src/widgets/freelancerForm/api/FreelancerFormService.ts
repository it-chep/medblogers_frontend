import { IFormError, IFreelancerForm } from "../model/types"
import { SERVER_URL_API } from "@/src/app/env/env"

class FreelancerFormService {

    async setForm(form: IFreelancerForm){
        const response = await fetch(SERVER_URL_API + '/v1/freelancers/create',
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

export const freelancerFormService = new FreelancerFormService()