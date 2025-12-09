import { FC } from "react";
import classes from './miniature.module.scss'
import { IBlogMiniature } from "../../model/types";
import Link from "next/link";
import { MyButtonBlog } from "../button/MyButton";


interface IProps {
    blog: IBlogMiniature;
}

export const BlogMiniature: FC<IProps> = ({blog}) => {

    return (
        <section className={classes.container}>
            <section className={classes.imageBox}>
                {
                    blog.photoLink
                        &&
                    <img src={blog.photoLink} />
                }
            </section>
            <section className={classes.wrap}>
                <section className={classes.date}>
                    {blog.createdAt}
                </section>
                <section className={classes.title}>
                    {blog.title}
                </section>
                <section className={classes.description}>
                    {blog.previewText}
                </section>
                <Link className={classes.link} href={'/blogs/' + blog.slug}>
                    <MyButtonBlog>
                        Читать статью
                    </MyButtonBlog>
                </Link>
            </section>
        </section>
    )
}