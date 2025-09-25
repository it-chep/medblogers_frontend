import { FC } from "react";
import classes from './filterList.module.scss'
import { MyCheckbox } from "@/src/shared/ui/myCheckbox";
import { IFilterFreelancer, IItemFilterFreelancer } from "../../model/types";

interface IProps {
    labelSlug: keyof IFilterFreelancer;
    mobile?: boolean;
    items: IItemFilterFreelancer[];
    onSelected: (name: string) => (selected: boolean) => void;
}

export const FilterFreelancerList: FC<IProps> = ({items, mobile, labelSlug, onSelected}) => {

    return (
        <ul className={classes.filterList + (mobile ? ` ${classes.mobile}` : '')}>
            {items.map(item => 
                <li key={item.name} data-id={item.id} className={labelSlug} id={labelSlug + `-${item.id}`}>
                    <MyCheckbox 
                        onSelected={onSelected(item.name)} 
                        checked={item.selected} 
                        label={item.name + (item.freelancersCount ? ' ' + `(${item.freelancersCount})` : '')}
                    />
                </li>
            )}
        </ul>
    )
}