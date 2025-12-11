import { FC, PropsWithChildren } from "react";
import classes from './blog.module.scss'
import { IBlogDetail } from "../../model/types";

interface IProps{
    blog: IBlogDetail;
}

export const Blog: FC<IProps & PropsWithChildren> = ({blog, children}) => {


    return (
        <section className={classes.container}>
            <section className={classes.header}>
                <section className={classes.date}>
                    {blog.createdAt}
                </section>
                <section className={classes.share}>
                    {children}
                </section>
            </section>
            <section className={classes.content}>
                <h1>{blog.title}</h1>
                <section 
                    dangerouslySetInnerHTML={{__html: blog.body}} 
                />
            </section>
        </section>
    )
}