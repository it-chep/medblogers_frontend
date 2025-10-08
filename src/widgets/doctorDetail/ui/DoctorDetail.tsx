import { DoctorCard, doctorService, OtherSocial } from "@/src/entities/doctor";
import { IDoctor } from "@/src/entities/doctor/model/types";
import { OtherSocialMediaDropdown } from "@/src/features/otherSocialMediaDropdown";
import { isDynamicServerError } from "next/dist/client/components/hooks-server-context";
import { notFound } from "next/navigation";

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

    if(!doctor || doctor.code === 2){
        return (
            notFound()
        )
    }

    return (
        <DoctorCard doctor={doctor}>
            <OtherSocialMediaDropdown>
                <OtherSocial doctor={doctor} />
            </OtherSocialMediaDropdown>
        </DoctorCard>
    )
}