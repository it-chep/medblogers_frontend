import { Metadata } from "next";
import AuthorsPage from "@/src/views/authors/authors";
import { cookies } from "next/headers";

export const metadata: Metadata = {
    title: {
        absolute: 'Авторы | MEDBLOGERS BASE',
    },
    description: 'Авторы Medblogers Base — врачи, редакторы и эксперты, которые создают контент проекта.',
    openGraph: {
        title: 'Авторы | MEDBLOGERS BASE',
        description: 'Авторы Medblogers Base — врачи, редакторы и эксперты, которые создают контент проекта.',
        url: 'https://medblogers-base.ru/authors',
        type: 'website',
    },
};

export default async function Authors() {

    const cookieStore = await cookies();
    const isLightTheme = cookieStore.get('theme')?.value === "light";

    return (
        <section className={"blog" + (isLightTheme ? ` light` : '')}>
            <AuthorsPage isLightTheme={isLightTheme} />
        </section>
    )
}
