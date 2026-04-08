import { FC } from "react";
import classes from './miniature.module.scss'
import { IBlogMiniature } from "../../model/types";
import Link from "next/link";
import { MyButtonBlog } from "../button/MyButton";
import { BlogCategories } from "../categories/BlogCategories";
import { Views } from "@/src/shared/ui/views";

interface IProps {
    blog: IBlogMiniature;
}

export const BlogMiniature: FC<IProps> = ({blog}) => {

    return (
        <Link 
            href={'/blogs/' + blog.slug} 
            className={classes.container}
        >
            <section className={classes.imageBox}>
                {
                    blog.photoLink
                        &&
                    <img src={blog.photoLink} />
                }
            </section>
            <section className={classes.wrap}>
                {
                    blog.categories.length > 0
                        &&
                    <section className={classes.categories}>
                        <BlogCategories 
                            categories={blog.categories} 
                            miniature 
                        />
                    </section>
                }
                <section className={classes.wrapData}>
                    <section className={classes.data}>
                        <section className={classes.title}>
                            {blog.title}
                        </section>
                        <section className={classes.description}>
                            {blog.previewText}
                        </section>
                    </section>
                    <section className={classes.footer}>
                        <section className={classes.dateCounts}>
                            <section className={classes.date}>
                                {blog.createdAt}
                            </section>
                            <Views views={blog.viewsCount} />
                        </section>
                        <section className={classes.button}>
                            <MyButtonBlog>
                                Читать статью
                            </MyButtonBlog>
                        </section>
                    </section>
                </section>
            </section>
        </Link>
    )
}