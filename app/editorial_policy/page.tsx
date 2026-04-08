import { Metadata } from "next";
import EditorialPolicyPage from "@/src/views/editorial_policy/editorialPolicy";
import { BlogThemeRoot } from "@/src/features/switchTheme/ui/root/BlogThemeRoot";

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

export default function EditorialPolicy() {

    return (
        <BlogThemeRoot>
            <EditorialPolicyPage />
        </BlogThemeRoot>
    )
}