import { FC, Suspense } from "react";
import { LoaderContainer } from "@/src/shared/ui/loaderContainer";
import classes from './blogsTop.module.scss'
import BlogsTop from "./BlogsTop";
import { MyButton } from "@/src/shared/ui/myButton";
import Link from "next/link";


export const BlogsTopLayout: FC = () => {

    return (
        <section className={classes.wrapper}>
            <Suspense fallback={<section className={classes.loader}><LoaderContainer /></section>}>
                <BlogsTop />
            </Suspense>   
            <section className={classes.button}>
                <Link href={'/blogs'}>
                    <MyButton>
                        Больше полезных статей
                    </MyButton>
                </Link>
            </section>     
        </section>
    )
}