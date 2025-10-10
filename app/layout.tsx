import "./globals.css";
import "./fonts.module.scss"
import { Suspense } from "react";
import { Header } from "@/src/widgets/header";
import { Footer } from "@/src/widgets/footer";
import { Metadata } from "next";
import { VerifiedCookies } from "@/src/widgets/verifiedCookies";
import { YandexMetrika } from "@/src/app/metrika/YandexMetrika";

export const metadata: Metadata = {
  title: {
    template: '%s | MEDBLOGERS BASE - Единая база врачей-блогеров для поиска рекламы',
    default: 'MEDBLOGERS BASE - Единая база врачей-блогеров для поиска рекламы', 
  },
  description: 'Единая база врачей-блогеров для поиска рекламы',
  openGraph: {
    title: 'MEDBLOGERS BASE - Единая база врачей-блогеров для поиска рекламы',
    description: 'Единая база врачей-блогеров для поиска рекламы',
    images: 'https://storage.yandexcloud.net/medblogers-photos/seo.png',
    url: 'https://medblogers-base.ru/',
    type: 'website'
  },
};


export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <Suspense fallback={<></>} >
            <html lang="en">
                <body>
                    <Header />
                    {children}
                    <Footer />
                    <VerifiedCookies />
                </body>
            </html>
            <YandexMetrika counterId={99369042} />
        </Suspense>
  );
}
