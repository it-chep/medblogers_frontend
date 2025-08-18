import { FC, useEffect } from "react";
import classes from './filterList.module.scss'
import { MyCheckbox } from "@/src/shared/ui/myCheckbox";
import { IFilter, useFilterActions } from "@/src/entities/filter";
import { useAppSelector } from "@/src/app/store/store";

interface IProps {
    labelSlug: keyof Omit<IFilter, 'minSubscribers' | 'maxSubscribers'>;
    mobile?: boolean;
    items: {
        id?: string;
        name: string;
        doctorsCount?: string;
        slug?: string;
        selected?: boolean;
    }[];
}

export const FilterList: FC<IProps> = ({items, mobile, labelSlug}) => {
 
    const {setSelected} = useFilterActions()

    const onSelected = (ind: number) => {
        return (selected: boolean) => {
            setSelected({field: labelSlug, index: ind, selected})
        }
    }

    return (
        <ul className={classes.filterList + (mobile ? ` ${classes.mobile}` : '')}>
            {items.map((item, ind) => 
                <li key={ind} data-id={item.id || item.slug} className={labelSlug} id={labelSlug + `-${item.id || item.slug}`}>
                    <MyCheckbox 
                        onSelected={onSelected(ind)} 
                        checked={item.selected} 
                        label={item.name + (item.doctorsCount ? ' ' + `(${item.doctorsCount})` : '')}
                    />
                </li>
            )}
        </ul>
    )
}