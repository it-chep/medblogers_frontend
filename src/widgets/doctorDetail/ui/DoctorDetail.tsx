import { isDynamicServerError } from "next/dist/client/components/hooks-server-context";
import { notFound } from "next/navigation";
import { DoctorCard, IDoctor, IDoctorVip, OtherSocial } from "@/src/entities/doctor";
import { OtherSocialMediaDropdown } from "@/src/features/otherSocialMediaDropdown";
import { DoctorSticky } from "@/src/features/doctorSticky";
import { ShowContentSmoothly } from "@/src/features/ShowContentSmoothly";

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

    const isVip = Boolean(props.doctorVip)

    return (
        <>
            <DoctorCard 
                doctor={doctor}
                doctorVip={props.doctorVip}
            >
                <OtherSocialMediaDropdown isVip={isVip}>
                    <OtherSocial doctor={doctor} isVip={isVip} />
                </OtherSocialMediaDropdown>
            </DoctorCard>
            <ShowContentSmoothly
                speed_ms={250}
                mobile
            >
                <DoctorSticky 
                    doctor={doctor}
                    isVip={isVip}
                />
            </ShowContentSmoothly>
        </>
    )
}