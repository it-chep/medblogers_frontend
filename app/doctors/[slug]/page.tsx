import DoctorPage from "@/src/views/doctor/Doctor"

type TParams = {
    slug: string;
};

export default async function Product({ params }: any) {

    const { slug }: TParams = await params;

    return (
        <DoctorPage slug={slug} />
    )
}