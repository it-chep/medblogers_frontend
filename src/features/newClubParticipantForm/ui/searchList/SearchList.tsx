import { FC } from "react";
import classes from './searchList.module.scss'


type TItem = {name: string, id: string}

interface IProps {
    itemList: TItem[];
    onSelected: (selected: TItem) => void;
}

export const SearchList: FC<IProps> = ({itemList, onSelected}) => {

    return (
        <ul className={classes.list}>
            {itemList.map((item, ind) => 
                <li onClick={() => onSelected(item)} key={ind}>{item.name}</li>
            )}
        </ul>
    )
}