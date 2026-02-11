"use client"

import { FC } from "react";
import classes from './categories.module.scss'
import { IBlogCategory } from "../../model/types";
import { useRouter } from "next/navigation";

interface IProps {
    categories: IBlogCategory[];
    miniature?: boolean;
}

export const BlogCategories: FC<IProps> = ({categories, miniature = false}) => {

    const router = useRouter()

    return (
        categories.length > 0
            ?
        <ul className={classes.list + (miniature ? ` ${classes.miniature}` : '')}>
            {categories.map(category => 
                <li
                    style={{
                        backgroundColor: category.bgColor,
                        color: category.fontColor,
                    }}
                    key={category.id}
                    className={classes.item}
                    onClick={(e) => {
                        e.preventDefault()
                        router.push(`/blogs?category=${category.id}`)
                    }}
                >   
                    {category.name}
                </li>
            )}
        </ul>
            :
        <></>
    )
}