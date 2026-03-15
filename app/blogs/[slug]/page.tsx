import { blogService, IBlogDetail } from "@/src/entities/blog";
import BlogPage from "@/src/views/blog/Blog";
import "./page.css";
import { cookies } from "next/headers";

type TParams = {
    slug: string;
};

export const dynamicParams = true 

export async function generateMetadata({ params }: any) {
    const { slug }: TParams = await params;
    let seo: IBlogDetail | null = null;
    try{
        seo = await blogService.get(slug)
    }
    catch(e){
        console.log(e)
    }
    return {
        title: seo?.title || '',
        description: seo?.additionalSeoText || '',
        openGraph: {
            title: seo?.title || '',
            description: seo?.additionalSeoText || '',
            images: seo?.photoLink || '',
        },
    };
}

export default async function Blog({ params }: any) {

    const { slug }: TParams = await params;

    const cookieStore = await cookies();
    const isLightTheme = cookieStore.get('theme')?.value === "light";    
    
    return (
        <section className={"blog" + (isLightTheme ? ` light` : '')}>
            <BlogPage 
                slug={slug} 
                isLightTheme={isLightTheme}   
            />
        </section>
    )
}