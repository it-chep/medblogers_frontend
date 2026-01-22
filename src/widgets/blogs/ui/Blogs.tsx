import { FC } from "react";
import classes from './blogs.module.scss'
import { BlogMiniature, IBlogMiniature } from "@/src/entities/blog";

interface IProps {
    blogs: IBlogMiniature[];
}

export const BlogsWidget: FC<IProps> = ({blogs}) => {

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