import { doctorService } from "@/src/entities/doctor"
import { IDoctor } from "@/src/entities/doctor/model/types"
import DoctorPage from "@/src/views/doctor/Doctor"


type Props = {
    params: { slug: string }
}


export default async function Product({params}: Props) {


    const { slug } = await params

    return (
        <DoctorPage slug={slug} />
    )
}