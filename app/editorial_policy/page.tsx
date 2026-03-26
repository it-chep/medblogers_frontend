import { Metadata } from "next";
import EditorialPolicyPage from "@/src/views/editorial_policy/editorialPolicy";
import { cookies } from "next/headers";

export const metadata: Metadata = {
    title: {
        absolute: 'Редакционная политика | MEDBLOGERS BASE',
    },
    description: 'Редакционная политика Medblogers Base — о проекте, редакционной независимости, авторах, источниках данных и этических принципах.',
    openGraph: {
        title: 'Редакционная политика | MEDBLOGERS BASE',
        description: 'Редакционная политика Medblogers Base — о проекте, редакционной независимости, авторах, источниках данных и этических принципах.',
        url: 'https://medblogers-base.ru/editorial_policy',
        type: 'website',
    },
};

export default async function EditorialPolicy() {

    const cookieStore = await cookies();
    const isLightTheme = cookieStore.get('theme')?.value === "light";

    return (
        <section className={"blog" + (isLightTheme ? ` light` : '')}>
            <EditorialPolicyPage isLightTheme={isLightTheme} />
        </section>
    )
}
