import { FC } from "react";
import classes from './filterList.module.scss'
import { MyCheckbox } from "@/src/shared/ui/myCheckbox";

interface IProps {
    labelSlug: string;
    mobile?: boolean;
    items: {
        id?: string;
        name: string;
        doctorsCount?: string;
        slug?: string;
    }[];
}

export const FilterList: FC<IProps> = ({items, mobile, labelSlug}) => {


    return (
        <ul className={classes.filterList + (mobile ? ` ${classes.mobile}` : '')}>
            {items.map((item, ind) => 
                <li key={ind} data-id={item.id || item.slug} className={labelSlug} id={labelSlug + `-${item.id || item.slug}`}>
                    <MyCheckbox label={item.name + (item.doctorsCount ? ' ' + `(${item.doctorsCount})` : '')} />
                </li>
            )}
        </ul>
    )
}