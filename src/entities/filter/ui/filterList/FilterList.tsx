import { FC } from "react";
import classes from './filterList.module.scss'
import { MyCheckbox } from "@/src/shared/ui/myCheckbox";

interface IProps {
    labelSlug: string;
    items: {
        id: number;
        name: string;
    }[];
}

export const FilterList: FC<IProps> = ({items, labelSlug}) => {

    return (
        <ul className={classes.filterList}>
            {items.map(item => 
                <li key={item.id} className={labelSlug + `-${item.id}`}>
                    <MyCheckbox label={item.name} />
                </li>
            )}
        </ul>
    )
}