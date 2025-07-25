import { FC } from "react";
import classes from './filterList.module.scss'
import { MyCheckbox } from "@/src/shared/ui/myCheckbox";

interface IProps {
    labelSlug: string;
    items: {
        id?: number;
        name: string;
        slug?: string;
    }[];
}

export const FilterList: FC<IProps> = ({items, labelSlug}) => {

    return (
        <ul className={classes.filterList}>
            {items.map((item, ind) => 
                <li key={ind} data-id={item.id || item.slug} className={labelSlug} id={labelSlug + `-${item.id || item.slug}`}>
                    <MyCheckbox label={item.name} />
                </li>
            )}
        </ul>
    )
}