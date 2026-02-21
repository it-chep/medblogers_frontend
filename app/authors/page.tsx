import { Metadata } from "next";
import AuthorsPage from "@/src/views/authors/authors";

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

export default function Authors() {
    return <AuthorsPage />;
}
