import { doctorService, IDoctorSeo } from "@/src/entities/doctor";
import FreelancerPage from "@/src/views/freelancer/Freelancer";
import { Metadata } from "next";

type TParams = {
    slug: string;
};

export const dynamicParams = true 

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  
  return {
    title: `Помогаю врачам-блогерам`,
    description: `Профессиональный помощник для ведения медицинского блога`,
    openGraph: {
      title: `Помогаю врачам-блогерам`,
      description: `Профессиональный помощник для ведения медицинского блога`,
      url: `https://medblogers-base.ru/helpers/${params.slug}`,
    },
  };
}

export default async function Freelancer({ params }: any) {

    const { slug }: TParams = await params;

    return (
        <FreelancerPage slug={slug} />
    )
}