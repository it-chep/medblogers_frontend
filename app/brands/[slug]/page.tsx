import BrandPage from "@/src/views/brand/BrandPage";

type TParams = {
    slug: string;
};

export default async function Brand({params}: any) {

    const { slug }: TParams = await params;

    return (
        <BrandPage slug={slug} />
    )
}