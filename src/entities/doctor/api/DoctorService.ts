import {IDoctor, IDoctorMiniatureResponse, IDoctorSeo} from "../model/types";


class DoctorService {

    async getAll(params: string): Promise<IDoctorMiniatureResponse> {
        const response = await fetch(process.env.NEXT_PUBLIC_SERVER_URL_API + '/v1/filter-doctors' + (params ? `?${params}` : ''),
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
        const doctor: IDoctor = await response.json()
        return doctor
    }

    async seo(slug: string){
        console.log(process.env.NEXT_PUBLIC_SERVER_URL_API + '/v1/seo/' + slug)
        const response = await fetch(process.env.NEXT_PUBLIC_SERVER_URL_API + '/v1/seo/' + slug,
            {
                cache: 'no-store',
            }
        )
        const seo: IDoctorSeo = await response.json()
        return seo
    }

}

export const doctorService = new DoctorService()