import { SERVER_URL_API } from "@/src/app/env/env";
import {IDoctor, IDoctorMiniatureResponse, IDoctorSeo, IDoctorVip, IRatingResponse} from "../model/types";
import { MyError } from "@/src/shared/lib/error/MyError";


class DoctorService {

    async getAll(params: string): Promise<IDoctorMiniatureResponse> {
        const response = await fetch(SERVER_URL_API + '/v1/filter-doctors' + (params ? `?${params}` : ''),
            {
                cache: "no-cache"
            }
        )
        const doctorsData: IDoctorMiniatureResponse = await response.json()
        return doctorsData
    }

    async get(slug: string): Promise<IDoctor> {
        const response = await fetch(SERVER_URL_API + '/v1/doctors/' + slug,
            {
                cache: "no-cache"
            }
        )
        const doctor: IDoctor = await response.json()
        return doctor
    }

    async getVip(slug: string): Promise<IDoctorVip> {
        const response = await fetch(SERVER_URL_API + '/v1/doctors/' + slug + '/vip_info',
            {
                next: {revalidate: 60}
            }
        )

        if(!response.ok){
            throw new MyError('Ошибка в запросе', response.status)
        }

        const doctorVip: IDoctorVip = await response.json()
        return doctorVip
    }

    async getRating(): Promise<IRatingResponse> {
        const response = await fetch(SERVER_URL_API + '/v1/medblogers_rating', {
            cache: "no-cache"
        })
        const data: IRatingResponse = await response.json()
        return data
    }

    async seo(slug: string){
        const response = await fetch(SERVER_URL_API + '/v1/seo/' + slug,
            {
                cache: 'no-store',
            }
        )
        const seo: IDoctorSeo = await response.json()
        return seo
    }

}

export const doctorService = new DoctorService()