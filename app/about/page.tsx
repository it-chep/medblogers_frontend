import { Metadata } from "next";
import AboutPage from "@/src/views/about/about";
import { cookies } from "next/headers";

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

export default async function About() {

    const cookieStore = await cookies();
    const isLightTheme = cookieStore.get('theme')?.value === "light";    

    return (
        <section className={"blog" + (isLightTheme ? ` light` : '')}>
            <AboutPage isLightTheme={isLightTheme} />
        </section>
    )
}
