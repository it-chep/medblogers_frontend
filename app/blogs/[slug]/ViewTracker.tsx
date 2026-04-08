"use client"

import {blogService} from "@/src/entities/blog";
import {userService} from "@/src/entities/user";
import {FC, PropsWithChildren, useEffect} from "react";

interface IProps {
    slug: string;
}

export const ViewTracker: FC<IProps & PropsWithChildren> = ({slug, children}) => {
    const getCurrentDomain = () => {
        return window.location.hostname || ""
    }

    const getCookieId = async (domain: string) => {
        try {
            const cookieId = await userService.createCookieId(domain)
            return cookieId
        } catch (e) {
            console.log(e)
            return null
        }
    }

    const onView = async () => {
        let cookieId = localStorage.getItem('cookie_id')
        const domain = getCurrentDomain()
        if (!cookieId) {
            cookieId = await getCookieId(domain)
            if (cookieId) {
                localStorage.setItem("cookie_id", cookieId)
            }
        }

        if (cookieId) {
            await blogService.addView(slug, cookieId)
        }
    }

    useEffect(() => {
        onView()
    }, [])

    return (
        children
    )
}