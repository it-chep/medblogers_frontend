import {IDoctor, IDoctorMiniatureResponse} from "../model/types";


class DoctorService {


    async getAll(params: string): Promise<IDoctorMiniatureResponse> {
        const response = await fetch(process.env.NEXT_PUBLIC_SERVER_URL_API + '/v1/filter-doctors' + (params ? `/${params}` : ''),
            {
                cache: "no-cache"
            }
        )
        const doctorsData: IDoctorMiniatureResponse = await response.json()
        return doctorsData
    }

    async get(slug: string): Promise<IDoctor> {
        
        const response = await fetch(process.env.NEXT_PUBLIC_SERVER_URL_API + '/v1/doctors/' + slug,
            {
                next: {revalidate: 60}
            }
        )
        // await new Promise(resolve => setTimeout(resolve, 4000))
        const doctor: IDoctor = await response.json()
        return doctor
    }

}

export const doctorService = new DoctorService()