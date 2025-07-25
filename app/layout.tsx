import "./globals.css";
import "./fonts.module.scss"
import { Suspense } from "react";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <Suspense fallback={<></>} >
            <html lang="en">
                <body>
                    {children}
                </body>
            </html>
        
        </Suspense>
  );
}
