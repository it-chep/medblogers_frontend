import { FC } from "react";
import classes from './search.module.scss'
import { IBlogSearch } from "../../model/types";
import Link from "next/link";
import { LoaderSpinner } from "@/src/shared/ui/loaderSpinner";

interface IProps {
    blogs: IBlogSearch[] | null;
    isLoading: boolean;
}

export const BlogSearchItems: FC<IProps> = ({blogs, isLoading}) => {

    return (
        <section className={classes.container}>
            {
                isLoading   
                    ?
                <section className={classes.loader}><LoaderSpinner /></section>
                    :
                blogs === null
                    ?
                <></>
                    :
                blogs.length === 0
                    ?
                <section className={classes.empty}>Нет статей по такому запросу</section>
                    :
                <ul className={classes.list}>
                    {blogs.map(blog => 
                        <li
                            key={blog.slug}
                            className={classes.item}
                        >   
                            <Link 
                                href={`/blogs/${blog.slug}`}
                                className={classes.link}
                            >
                                <img className={classes.image} src={blog.photoLink} alt="Превью статьи" />
                                <section className={classes.data}>
                                    <section className={classes.title}>
                                        {blog.title}
                                    </section>
                                    <section className={classes.desc}>
                                        {blog.previewText}
                                    </section> 
                                </section>
                            </Link>
                        </li>
                    )}
                </ul>
            }
        </section>
    )
}