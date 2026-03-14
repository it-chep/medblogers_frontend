import { useEffect, useState } from "react";

export const useCheckTargetHeadline = (headlines: Element[]) => {
    const [selectedHeadline, setSelectedHeadline] = useState<Element | null>(null);

    useEffect(() => {
        if (typeof window === "undefined" || !headlines.length) {
            setSelectedHeadline(null);
            return;
        }

        const checkTargetHeadline = () => {
            const currentTop = window.scrollY;
            const currentBottom = window.scrollY + window.innerHeight;
            let firstElem: Element | null = null;

            for (const headline of headlines) {
                const elemTop = headline.getBoundingClientRect().top + window.scrollY;

                if (elemTop > currentTop && elemTop < currentBottom) {
                    firstElem = headline;
                    break;
                }
            }

            if (!firstElem) {
                for (const headline of [...headlines].reverse()) {
                    const elemTop = headline.getBoundingClientRect().top + window.scrollY;

                    if (elemTop < currentBottom) {
                        firstElem = headline;
                        break;
                    }
                }
            }

            setSelectedHeadline(firstElem);
        };

        checkTargetHeadline();
        window.addEventListener("scroll", checkTargetHeadline, { passive: true });
        window.addEventListener("resize", checkTargetHeadline);

        return () => {
            window.removeEventListener("scroll", checkTargetHeadline);
            window.removeEventListener("resize", checkTargetHeadline);
        };
    }, [headlines]);

    return selectedHeadline;
};
