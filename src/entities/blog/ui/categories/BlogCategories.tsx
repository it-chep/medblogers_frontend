import { FC } from "react";
import classes from './categories.module.scss'
import { IBlogCategory } from "../../model/types";
import Link from "next/link";


interface IProps {
    categories: IBlogCategory[];
    miniature?: boolean;
}

export const BlogCategories: FC<IProps> = ({categories, miniature = false}) => {

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
                >   
                    <Link 
                        className={classes.link} 
                        href={miniature ? `?category=${category.id}` : `/blogs?category=${category.id}`}
                    >
                        {category.name}
                    </Link>
                </li>
            )}
        </ul>
            :
        <></>
    )
}