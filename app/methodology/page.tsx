import MethodologyPage from "@/src/views/methodology/methodology";
import { Metadata } from "next";
import { cookies } from "next/headers";

export const metadata: Metadata = {
    title: {
        absolute: 'Методология базы | MEDBLOGERS BASE',
    },
    description: 'Методология базы Medblogers Base — критерии отбора врачей-блогеров, источники данных, принципы проверки и обновления информации.',
    openGraph: {
        title: 'Методология базы | MEDBLOGERS BASE',
        description: 'Методология базы Medblogers Base — критерии отбора врачей-блогеров, источники данных, принципы проверки и обновления информации.',
        url: 'https://medblogers-base.ru/methodology',
        type: 'website',
    },
};

export default async function Methodology() {

    const cookieStore = await cookies();
    const isLightTheme = cookieStore.get('theme')?.value === "light";    

    return (
        <section className={"blog" + (isLightTheme ? ` light` : '')}>
            <MethodologyPage isLightTheme={isLightTheme} />
        </section>
    )
}
