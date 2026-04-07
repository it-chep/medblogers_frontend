"use client";

import { createContext, FC, PropsWithChildren, useEffect, useLayoutEffect, useState } from "react";

interface IContext {
    isLight: boolean;
    setLight: () => void;
    setDark: () => void;
}

const useIsomorphicLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

const getInitialTheme = () => {
    if (typeof window === "undefined") {
        return false;
    }

    const storedTheme = window.localStorage.getItem("theme");

    if (storedTheme === "light") {
        return true;
    }

    if (storedTheme === "dark") {
        return false;
    }

    const blog = document.querySelector(".blog");

    if (blog) {
        return blog.classList.contains("light");
    }

    return window.matchMedia("(prefers-color-scheme: light)").matches;
};

export const BlogThemeContext = createContext<IContext | null>(null);

export const BlogThemeProvider: FC<PropsWithChildren> = ({ children }) => {
    const [isLight, setIsLight] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    useIsomorphicLayoutEffect(() => {
        setIsLight(getInitialTheme());
        setIsMounted(true);
    }, []);

    useEffect(() => {
        if (!isMounted) {
            return;
        }

        const blog = document.querySelector(".blog");
        const theme = isLight ? "light" : "dark";

        if (blog) {
            blog.classList.toggle("light", isLight);
        }

        window.localStorage.setItem("theme", theme);
    }, [isLight, isMounted]);

    return (
        <BlogThemeContext.Provider
            value={{
                isLight,
                setLight: () => setIsLight(true),
                setDark: () => setIsLight(false),
            }}
        >
            {children}
        </BlogThemeContext.Provider>
    );
};