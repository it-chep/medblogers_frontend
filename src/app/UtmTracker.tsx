'use client';

import { SERVER_URL_API } from "@/src/app/env/env";
import { userService } from "@/src/entities/user";
import { ensureCookieId } from "@/src/shared/lib/analytics/cookieId";
import Script from "next/script";
import { useEffect, useState } from "react";

type UtmTrackerApi = {
    sendFromLocation: (config: {
        cookieId: string;
        endpoint: string;
        token?: string;
        source: string;
    }) => Promise<boolean>;
};

type UtmTrackerWindow = Window & typeof globalThis & {
    __utmTrackerStarted?: boolean;
    UtmTracker?: UtmTrackerApi;
};

const UTM_ENDPOINT = `${SERVER_URL_API}/v1/analytics/save`;

export const UtmTracker = () => {
    const [isScriptReady, setIsScriptReady] = useState(false);

    const runTracker = async () => {
        if (typeof window === "undefined") {
            return;
        }

        const trackerWindow = window as UtmTrackerWindow;
        const trackerApi = trackerWindow.UtmTracker;

        if (trackerWindow.__utmTrackerStarted || !trackerApi?.sendFromLocation) {
            return;
        }

        trackerWindow.__utmTrackerStarted = true;

        const cookieId = await ensureCookieId((domain) => userService.createCookieId(domain));

        if (!cookieId) {
            return;
        }

        try {
            await trackerApi.sendFromLocation({
                cookieId,
                endpoint: UTM_ENDPOINT,
                source: trackerWindow.location.hostname || "",
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
