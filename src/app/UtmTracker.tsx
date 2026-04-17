'use client';

import { SERVER_URL_API } from "@/src/app/env/env";
import { userService } from "@/src/entities/user";
import { ensureCookieId } from "@/src/shared/lib/analytics/cookieId";
import Script from "next/script";
import { useEffect, useState } from "react";

const UTM_ENDPOINT = `${SERVER_URL_API}/v1/analytics/add_utm`;

export const UtmTracker = () => {
    const [isScriptReady, setIsScriptReady] = useState(false);

    const runTracker = async () => {
        if (typeof window === "undefined") {
            return;
        }

        if (window.__utmTrackerStarted || !window.UtmTracker?.sendFromLocation) {
            return;
        }

        window.__utmTrackerStarted = true;

        const cookieId = await ensureCookieId((domain) => userService.createCookieId(domain));

        if (!cookieId) {
            return;
        }

        try {
            await window.UtmTracker.sendFromLocation({
                cookieId,
                endpoint: UTM_ENDPOINT,
                token: process.env.NEXT_PUBLIC_TOKEN,
            });
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        if (!isScriptReady) {
            return;
        }

        runTracker();
    }, [isScriptReady]);

    return (
        <Script
            src="/utm-tracker.js"
            strategy="afterInteractive"
            onLoad={() => setIsScriptReady(true)}
        />
    );
};
