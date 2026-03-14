import { Metadata } from "next";
import AboutPage from "@/src/views/about/about";

export const metadata: Metadata = {
    title: {
        absolute: 'О проекте | MEDBLOGERS BASE',
    },
    description: 'Как устроен MEDBLOGERS BASE: зачем мы создавали единую базу врачей-блогеров, кому она полезна и как развивается проект.',
    openGraph: {
        title: 'О проекте | MEDBLOGERS BASE',
        description: 'Как устроен MEDBLOGERS BASE: зачем мы создавали единую базу врачей-блогеров, кому она полезна и как развивается проект.',
        url: 'https://medblogers-base.ru/about',
        type: 'website',
    },
};

export default function About() {
    return <AboutPage />;
}
