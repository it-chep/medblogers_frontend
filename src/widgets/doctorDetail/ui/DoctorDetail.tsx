import { IDoctor, IDoctorVip } from "@/src/entities/doctor/model/types";
import { isDynamicServerError } from "next/dist/client/components/hooks-server-context";
import { notFound } from "next/navigation";
import { DoctorCard, StickyContact } from "@/src/entities/doctor";

interface IProps{
    reqDoctor: Promise<IDoctor>;
    doctorVip: IDoctorVip | null;
}

const getData = async (reqDoctor: Promise<IDoctor>) => {
    let doctor: IDoctor | null = null;
    try{
        doctor = await reqDoctor
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

    const doctor = await getData(props.reqDoctor)

    if(!doctor || doctor.code === 2){
        return (
            notFound()
        )
    }



    return (
        <>
            <DoctorCard 
                doctor={doctor}
                doctorVip={props.doctorVip}
            />
            <StickyContact 
                name={doctor.name}
                specialties={doctor.specialities.map(s => s.name).join(', ')}
                tg={doctor.tgUrl}
                vip={Boolean(props.doctorVip)}
            />
        </>
    )
}