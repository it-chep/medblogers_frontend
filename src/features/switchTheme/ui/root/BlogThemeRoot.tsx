import { PropsWithChildren } from "react";
import { BLOG_THEME_INIT_SCRIPT } from "../../lib/blogThemeScript";

export function BlogThemeRoot({ children }: PropsWithChildren) {
    return (
        <section className="blog" suppressHydrationWarning>
            <script
                dangerouslySetInnerHTML={{
                    __html: BLOG_THEME_INIT_SCRIPT,
                }}
            />
            {children}
        </section>
    );
}