'use client';

import { useEffect } from 'react';
import Script from 'next/script';
import { usePathname, useSearchParams } from 'next/navigation';

declare global {
    interface Window {
        dataLayer: unknown[];
        gtag?: (...args: unknown[]) => void;
    }
}

interface GoogleAnalyticsProps {
    gaId: string;
}

export const GoogleAnalytics = ({ gaId }: GoogleAnalyticsProps) => {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        if (!window.gtag) return;
        const query = searchParams.toString();  
        const url = query ? `${pathname}?${query}` : pathname;

        window.gtag('config', gaId, {
            page_path: url,
        });
    }, [pathname, searchParams, gaId]);

    return (
        <>
            <Script
                src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
                strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){window.dataLayer.push(arguments);}
                    window.gtag = gtag;
                    gtag('js', new Date());
                    gtag('config', '${gaId}', { send_page_view: false });
                `}
            </Script>
        </>
    );
};
