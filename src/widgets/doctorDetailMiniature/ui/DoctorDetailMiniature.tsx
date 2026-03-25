import { IDoctor, IDoctorVip } from "@/src/entities/doctor/model/types";
import { isDynamicServerError } from "next/dist/client/components/hooks-server-context";
import { notFound } from "next/navigation";
import { DoctorCardError, DoctorCardMiniature } from "@/src/entities/doctor";
import { ClinicHint } from "@/src/features/clinicHint";
import { PropsWithChildren } from "react";
import classes from './doctorDetailMiniature.module.scss'

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


export async function DoctorDetailMiniature(props: IProps & PropsWithChildren){

    const doctor = await getData(props.reqDoctor)

    if(!doctor || doctor.code === 2){
        return (
            notFound()
        )
    }

    const fio = doctor.name.split(' ')

    return (
        <section className={classes.wrapper}>
            <DoctorCardMiniature 
                doctor={doctor}
                doctorVip={props.doctorVip}
            >
                <>
                    {fio.slice(0, -1).join(' ')}&nbsp;
                    <ClinicHint name={fio[2]}/>
                </>
            </DoctorCardMiniature>
            <DoctorCardError/>
        </section>
    )
}