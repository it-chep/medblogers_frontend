import classes from './blogRecommendations.module.scss'
import { BlogMiniature, blogService, IBlogMiniature } from "@/src/entities/blog";
import { isDynamicServerError } from "next/dist/client/components/hooks-server-context";

const getData = async (slug: string) => {
    let blogs: IBlogMiniature[] | null = null;
    try{
        blogs = await blogService.getRecommendations(slug)
    }
    catch(e){
        if (isDynamicServerError(e)) {
            throw e;
        }
        console.log(e)
    }
    return blogs
}

interface IProps {
    slug: string;
}

export default async function BlogRecommendations({slug}: IProps) {

    const blogs = await getData(slug)

    if(!blogs?.length){
        return <></>
    }

    return (
        <section className={classes.miniatures}>
            {
                blogs.map(blog =>
                    <BlogMiniature
                        key={blog.slug}
                        blog={blog}
                    />
                )
            }
        </section>
    )
}
