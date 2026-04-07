export const BLOG_THEME_INIT_SCRIPT = `
try {
    var storedTheme = localStorage.getItem("theme");
    var theme = storedTheme;

    if (theme !== "light" && theme !== "dark") {
        theme = window.matchMedia("(prefers-color-scheme: light)").matches
            ? "light"
            : "dark";
    }

    var blog = document.currentScript && document.currentScript.parentElement;

    if (blog) {
        blog.classList.toggle("light", theme === "light");
    }
} catch (e) {}
`;