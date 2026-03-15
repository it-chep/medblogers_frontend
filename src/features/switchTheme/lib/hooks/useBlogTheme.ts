import { useContext } from "react";
import { BlogThemeContext } from "../../ui/provider/BlogThemeProvider";

export const useBlogTheme = () => {
    const context = useContext(BlogThemeContext);

    if (!context) {
        throw new Error("useBlogTheme must be used inside BlogThemeProvider");
    }

    return context;
};