import { Metadata } from "next";
import MethodologyPage from "@/src/views/methodology/methodology";

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

export default function Methodology() {
    return <MethodologyPage />;
}
