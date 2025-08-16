import { FC } from "react";
import classes from './searchList.module.scss'

interface IProps {
    itemList: string[];
    onSelected: (selected: string) => void;
}

export const SearchList: FC<IProps> = ({itemList, onSelected}) => {

    return (
        <ul className={classes.list}>
            {itemList.map((item, ind) => 
                <li onClick={() => onSelected(item)} key={ind}>{item}</li>
            )}
        </ul>
    )
}