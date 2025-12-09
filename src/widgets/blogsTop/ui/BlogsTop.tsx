import classes from './blogsTop.module.scss'
import { BlogMiniature, blogService, IBlogMiniature } from "@/src/entities/blog";
import { isDynamicServerError } from "next/dist/client/components/hooks-server-context";


const getData = async () => {
    let blogs: IBlogMiniature[] | null = null;
    try{
        blogs = await blogService.getTop() 
    }
    catch(e){
        if (isDynamicServerError(e)) {
            throw e;
        }
        console.log(e)
    }
    return blogs
}


export default async function BlogsTop() {

    const blogs = await getData()

    if(!blogs){
        return <></>
    }

    return (
        <section className={classes.miniatures}>
            {
                blogs.map(blog => 
                    <BlogMiniature
                        key={blog.title}
                        blog={blog}
                    />
                )
            }
        </section>
    )
}