import { doctorService, IDoctorSeo } from "@/src/entities/doctor";
import FreelancerPage from "@/src/views/freelancer/Freelancer";
import { Metadata } from "next";

type TParams = {
    slug: string;
};

export const dynamicParams = true 

export async function generateMetadata({ params }: any) {
    const { slug }: TParams = await params;
  return {
    title: `Помогаю врачам-блогерам`,
    description: `Профессиональный помощник для ведения медицинского блога`,
    openGraph: {
      title: `Помогаю врачам-блогерам`,
      description: `Профессиональный помощник для ведения медицинского блога`,
      url: `https://medblogers-base.ru/helpers/${slug}`,
    },
  };
}

export default async function Freelancer({ params }: any) {

    const { slug }: TParams = await params;

    return (
        <FreelancerPage slug={slug} />
    )
}