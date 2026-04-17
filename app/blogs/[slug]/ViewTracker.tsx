"use client"

import {blogService} from "@/src/entities/blog";
import {userService} from "@/src/entities/user";
import {ensureCookieId} from "@/src/shared/lib/analytics/cookieId";
import {FC, PropsWithChildren, useEffect, useRef} from "react";

interface IProps {
    slug: string;
}

export const ViewTracker: FC<IProps & PropsWithChildren> = ({slug, children}) => {
    const trackedSlugRef = useRef<string | null>(null)

    const onView = async () => {
        const cookieId = await ensureCookieId((domain: string) => userService.createCookieId(domain))

        if (!cookieId) {
            return
        }

        try {
            await blogService.addView(slug, cookieId)
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        if (trackedSlugRef.current === slug) {
            return
        }

        trackedSlugRef.current = slug
        onView()
    }, [slug])

    return (
        children
    )
}