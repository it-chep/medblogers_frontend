import React, { FC, PropsWithChildren } from "react";
import classes from './blog.module.scss'
import { IBlogDetail, IBlogDoctor } from "../../model/types";
import { DoctorTop } from "../doctorTop/DoctorTop";
import { Views } from "@/src/shared/ui/views";

interface IProps{
    blog: IBlogDetail;
    doctorBlog: IBlogDoctor | null;
    categories: React.ReactElement;
}

export const Blog: FC<IProps & PropsWithChildren> = ({blog, doctorBlog, categories, children}) => {

    return (
        <section className={classes.container}>
            <section className={classes.header}>
                {
                    doctorBlog 
                        &&
                    <DoctorTop doctorBlog={doctorBlog} />
                }
                <section className={classes.share}>
                    {children}
                </section>
            </section>
            {
                categories
            }
            <section className={classes.date}>
                {blog.createdAt}
                <Views 
                    views={blog.viewsCount} 
                    color="var(--text-sign)"
                />
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