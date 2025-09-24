import { FC } from "react";
import classes from './searchList.module.scss'
import { IItem } from "../../model/types";

interface IProps {
    itemList: IItem[];
    onSelected: (selectedId: number) => void;
}

export const SearchList: FC<IProps> = ({itemList, onSelected}) => {

    return (
        <ul className={classes.list}>
            {itemList.map(item => 
                <li 
                    onClick={() => onSelected(item.id)} 
                    key={item.id}
                >
                    {item.name}
                </li>
            )}
        </ul>
    )
}