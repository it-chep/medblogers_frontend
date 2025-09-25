import { FC } from "react";
import classes from './filterList.module.scss'
import { MyCheckbox } from "@/src/shared/ui/myCheckbox";
import { IFilter, IItemFilter } from "@/src/entities/filter";

interface IProps {
    labelSlug: keyof Omit<IFilter, 'minSubscribers' | 'maxSubscribers'>;
    mobile?: boolean;
    items: IItemFilter[];
    onSelected: (name: string) => (selected: boolean) => void;
}

export const FilterList: FC<IProps> = ({items, mobile, labelSlug, onSelected}) => {

    return (
        <ul className={classes.filterList + (mobile ? ` ${classes.mobile}` : '')}>
            {items.map(item => 
                <li key={item.name} data-id={item.id || item.slug} className={labelSlug} id={labelSlug + `-${item.id || item.slug}`}>
                    <MyCheckbox 
                        onSelected={onSelected(item.name)} 
                        checked={item.selected} 
                        label={item.name + (item.doctorsCount ? ' ' + `(${item.doctorsCount})` : '')}
                    />
                </li>
            )}
        </ul>
    )
}