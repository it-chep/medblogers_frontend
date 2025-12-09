import { blogService, IBlogDetail } from "@/src/entities/blog";
import BlogPage from "@/src/views/blog/Blog";
import "./page.css";

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

    return (
        <BlogPage slug={slug} />
    )
}