import { FC } from "react";
import classes from './categories.module.scss'
import { IBlogCategory } from "../../model/types";


interface IProps {
    categories: IBlogCategory[];
}

export const BlogCategories: FC<IProps> = ({categories}) => {

    return (
        categories.length > 0
            ?
        <ul className={classes.list}>
            {categories.map(category => 
                <li
                    style={{
                        backgroundColor: category.bgColor,
                        color: category.fontColor,
                    }}
                    key={category.id}
                    className={classes.item}
                >   
                    {category.name}
                </li>
            )}
        </ul>
            :
        <></>
    )
}