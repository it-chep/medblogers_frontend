import "./globals.css";
import "./fonts.module.scss"
import { Suspense } from "react";
import { Header } from "@/src/widgets/header";
import { Footer } from "@/src/widgets/footer";

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
