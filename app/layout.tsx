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
import { UtmTracker } from "@/src/app/UtmTracker";
import Script from "next/script";
import StatisticsLayout from "@/src/widgets/statistics";

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
      <html lang="en" suppressHydrationWarning>
        <body>
          <Script id="views-access" strategy="beforeInteractive">
            { /* для показа просмотров на статьях (до гидрации) */ }
            {`
              try {
                var canSeeViews = localStorage.getItem('can_visible_views') === 'true';
                if (canSeeViews) {
                  document.documentElement.classList.add('can-visible-views');
                }
              } catch (e) {}
            `}
          </Script>

          <GoogleAnalytics gaId="G-QLS1GZEW7H" />
          <UtmTracker />
          <YandexMetrika counterId={99369042} />
          <Header>
            <StatisticsLayout />
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
