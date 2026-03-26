import { Metadata } from "next";
import ChangelogPage from "@/src/views/changelog/changelog";
import { cookies } from "next/headers";

export const metadata: Metadata = {
    title: {
        absolute: 'Ключевые этапы развития MEDBLOGERS BASE',
    },
    description: 'Ключевые этапы развития MEDBLOGERS BASE: релизы, интеграции, новые функции и важные события проекта.',
    openGraph: {
        title: 'Ключевые этапы развития MEDBLOGERS BASE',
        description: 'Ключевые этапы развития MEDBLOGERS BASE: релизы, интеграции, новые функции и важные события проекта.',
        url: 'https://medblogers-base.ru/changelog',
        type: 'website',
    },
};

export default async function Changelog() {

    const cookieStore = await cookies();
    const isLightTheme = cookieStore.get('theme')?.value === "light";

    return (
        <section className={"blog" + (isLightTheme ? ` light` : '')}>
            <ChangelogPage isLightTheme={isLightTheme} />
        </section>
    )
}
