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