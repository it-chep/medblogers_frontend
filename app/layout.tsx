import "./globals.css";
import "./fonts.module.scss"
import { Suspense } from "react";
import { Header } from "@/src/widgets/header";
import { Footer } from "@/src/widgets/footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: '%s | MEDBLOGERS BASE - Единая база врачей-блогеров для поиска рекламы',
    default: 'MEDBLOGERS BASE - Единая база врачей-блогеров для поиска рекламы', 
  },
  description: 'Единая база врачей-блогеров для поиска рекламы'
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
                </body>
            </html>
        </Suspense>
  );
}
