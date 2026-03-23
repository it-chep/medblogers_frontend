import "./globals.css";
import "./fonts.module.scss"
import { Suspense } from "react";
import { Header } from "@/src/widgets/header";
import { Footer } from "@/src/widgets/footer";
import { Metadata } from "next";
import { VerifiedCookies } from "@/src/widgets/verifiedCookies";
import { YandexMetrika } from "@/src/app/metrika/YandexMetrika";
import { ButtonUp } from "@/src/features/buttonUp";
import { ShowContentSmoothly } from "@/src/features/ShowContentSmoothly";
import { GoogleAnalytics } from "@/src/app/google/GoogleAnalytics";
import { BannersMobile, TouchSwitchBanner } from "@/src/features/switchBanner";

const DESCRIPTION = "Единая база врачей-блогеров для поиска рекламы | Открытый реестр докторов с блогами | Единый реестр медицинских блогеров | Cписок врачей-блогеров | Подборка медицинских блогеров | Реестр для медблогеров"

export const metadata: Metadata = {
  title: {
    template: '%s | MEDBLOGERS BASE - ' + DESCRIPTION,
    default: 'MEDBLOGERS BASE - ' + DESCRIPTION, 
  },
  description: DESCRIPTION,
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
          <GoogleAnalytics gaId="G-QLS1GZEW7H" />
          <YandexMetrika counterId={99369042} />
          <Header>
            <TouchSwitchBanner banners={BannersMobile} />
          </Header>
          {children}
          <Footer />
          <VerifiedCookies />
          <ShowContentSmoothly
            speed_ms={200}
            mobile={false}  
          >
            <ButtonUp />
          </ShowContentSmoothly>
        </body>
      </html>
    </Suspense>
  );
}
