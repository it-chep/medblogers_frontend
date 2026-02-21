import { IDoctor, IDoctorVip } from "@/src/entities/doctor/model/types";
import { isDynamicServerError } from "next/dist/client/components/hooks-server-context";
import { notFound } from "next/navigation";
import { MyError } from "@/src/shared/lib/error/MyError";
import { DoctorCard } from "@/src/entities/doctor";

interface IProps{
    reqDoctor: Promise<IDoctor>;
    reqDoctorVip: Promise<IDoctorVip>;
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

const getVip = async (reqDoctorVip: Promise<IDoctorVip>) => {
    let doctorVip: IDoctorVip | null = null;
    try{
        doctorVip = await reqDoctorVip
    }
    catch(e){
        if((e instanceof MyError) && (e.status === 404)){}
        else{
            if (isDynamicServerError(e)) {
                throw e;
            }
            console.log(e)
        }
    }
    return doctorVip
}

export async function DoctorDetail(props: IProps){

    const doctor = await getData(props.reqDoctor)
    const doctorVip = await getVip(props.reqDoctorVip)

    if(!doctor || doctor.code === 2){
        return (
            notFound()
        )
    }

    return (
        <DoctorCard 
            doctor={doctor}
            doctorVip={doctorVip}
        />
    )
}