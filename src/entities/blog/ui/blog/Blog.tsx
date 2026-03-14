import React, { FC, PropsWithChildren } from "react";
import classes from './blog.module.scss'
import { IBlogDetail, IBlogDoctor } from "../../model/types";
import { DoctorTop } from "../doctorTop/DoctorTop";

interface IProps{
    blog: IBlogDetail;
    doctorBlog: IBlogDoctor | null;
    categories: React.ReactElement;
    switchTheme: React.ReactElement;
}

export const Blog: FC<IProps & PropsWithChildren> = ({blog, doctorBlog, categories, switchTheme, children}) => {

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
                {switchTheme}
            </section>
            {
                categories
            }
            <section className={classes.date}>
                {blog.createdAt}
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