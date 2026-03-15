import { Metadata } from "next";
import AboutPage from "@/src/views/about/about";

export const metadata: Metadata = {
    title: {
        absolute: 'Единая база врачей-блогеров | MEDBLOGERS BASE',
    },
    description: 'Как MEDBLOGERS BASE строит единую базу врачей-блогеров для рекламы, коллабораций и поиска специалистов.',
    openGraph: {
        title: 'Единая база врачей-блогеров | MEDBLOGERS BASE',
        description: 'Как MEDBLOGERS BASE строит единую базу врачей-блогеров для рекламы, коллабораций и поиска специалистов.',
        url: 'https://medblogers-base.ru/about',
        type: 'website',
    },
};

export default function About() {
    return <AboutPage />;
}
