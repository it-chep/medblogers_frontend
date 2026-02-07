import classes from './doctorBlogs.module.scss'
import { blogService, IBlogMiniature } from "@/src/entities/blog";
import { isDynamicServerError } from "next/dist/client/components/hooks-server-context";
import { notFound } from "next/navigation";
import { Selected } from "../selected/Selected";

interface IProps {
    slug: string;
}

interface IProps{
    slug: string;
}

const getData = async (slug: string) => {
    let blogs: IBlogMiniature[] | null = null;
    try{
        blogs = await blogService.getBlogsDoctor(slug) 
    }
    catch(e){
        if (isDynamicServerError(e)) {
            throw e;
        }
        console.log(e)
    }
    return blogs
}

export async function DoctorBlogs({slug}: IProps) {

    const blogs = await getData(slug)
    
    if(!blogs){
        return (
            notFound()
        )
    }

    if(!blogs.length){
        return (<></>)
    }

    return (
        <section className={classes.container}>
            <Selected blogs={blogs} />
        </section>
    )
}