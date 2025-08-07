import { DoctorCard, doctorService } from "@/src/entities/doctor";
import { IDoctor } from "@/src/entities/doctor/model/types";
import { isDynamicServerError } from "next/dist/client/components/hooks-server-context";



interface IProps{
    slug: string;
}

const getData = async (slug: string) => {
    let doctor: IDoctor | null = null;
    try{
        doctor = await doctorService.get(slug) 
    }
    catch(e){
        if (isDynamicServerError(e)) {
            throw e;
        }
        console.log(e)
    }
    return doctor
}

export async function DoctorDetail(props: IProps){

    const doctor = await getData(props.slug)

    console.log(doctor)

    if(!doctor || doctor.code === 2){
        return (
            <>404</>
        )
    }

    return (
        <DoctorCard doctor={doctor} />
    )
}