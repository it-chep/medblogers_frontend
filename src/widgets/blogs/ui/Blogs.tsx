import classes from './blogs.module.scss'
import { BlogMiniature, blogService, IBlogMiniature } from "@/src/entities/blog";
import { isDynamicServerError } from "next/dist/client/components/hooks-server-context";

interface IProps {
    ids: number[];
}

const getData = async (ids: number[]) => {
    let blogs: IBlogMiniature[] | null = null;
    try{
        if(ids.length){
            blogs = await blogService.getAllFilter(ids)
        }
        else{
            blogs = await blogService.getAll()
        }
    }
    catch(e){
        if (isDynamicServerError(e)) {
            throw e;
        }
        console.log(e)
    }
    return blogs
}

export async function BlogsWidget({ids}: IProps) {

    const blogs = await getData(ids)

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