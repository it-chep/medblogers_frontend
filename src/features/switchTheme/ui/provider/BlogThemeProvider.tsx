"use client";

import {createContext, FC, PropsWithChildren, useEffect, useState} from "react";

interface IContext {
    isLight: boolean;
    setLight: () => void;
    setDark: () => void;
}

interface IProps extends PropsWithChildren {
    initialIsLight: boolean;
}

export const BlogThemeContext = createContext<IContext | null>(null);

export const BlogThemeProvider: FC<IProps> = ({ initialIsLight, children }) => {
    const [isLight, setIsLight] = useState(initialIsLight);

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");

        if (storedTheme === "light") {
            setIsLight(true);
        }

        if (storedTheme === "dark") {
            setIsLight(false);
        }
    }, []);

    useEffect(() => {
        const blog = document.querySelector(".blog");
        const theme = isLight ? "light" : "dark";

        if (blog) {
            blog.classList.toggle("light", isLight);
        }

        localStorage.setItem("theme", theme);
        document.cookie = `theme=${theme}; path=/; max-age=31536000`;
    }, [isLight]);

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

