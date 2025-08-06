import {IDoctorMiniature, IDoctorMiniatureResponse} from "@/src/entities/doctor/model/types";


class DoctorService {


    async getAll(params: string){
        const response = await fetch(process.env.NEXT_PUBLIC_SERVER_URL_API + '/v1/filter-doctor/' + params,
            {
                cache: "no-cache"
            }
        )
        const doctorsData: IDoctorMiniatureResponse[] = await response.json()
        return doctorsData
    }

}

export const doctorService = new DoctorService()