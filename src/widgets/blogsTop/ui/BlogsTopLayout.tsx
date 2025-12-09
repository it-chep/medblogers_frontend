import { FC, Suspense } from "react";
import { LoaderContainer } from "@/src/shared/ui/loaderContainer";
import classes from './blogsTop.module.scss'
import BlogsTop from "./BlogsTop";


export const BlogsTopLayout: FC = () => {

    return (
        <Suspense fallback={<section className={classes.loader}><LoaderContainer /></section>}>
            <BlogsTop />
        </Suspense>        
    )
}