import { Metadata } from "next";
import ChangelogPage from "@/src/views/changelog/changelog";

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

export default function Changelog() {
    return <ChangelogPage />;
}
