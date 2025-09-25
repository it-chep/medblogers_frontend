import { FC, PropsWithChildren, useState } from "react";
import classes from './filterItem.module.scss'
import { SearchFilter, useSearchItems } from "@/src/features/searchFilter";
import { OpenFilter } from "@/src/features/openFilter";
import { IFilterFreelancer, IItemFilterFreelancer, useFilterFreelancerActions } from "@/src/entities/filterFreelancer";
import { FilterFreelancerList } from "@/src/entities/filterFreelancer/ui/filterList/FilterList";

interface IProps{
    label: string;
    labelSlug: keyof IFilterFreelancer;
    search?: boolean;
    items: IItemFilterFreelancer[];
    mobile?: boolean;

}

export const FilterItem: FC<IProps & PropsWithChildren> = ({label, mobile, labelSlug, items, search = true, children}) => {


    const [value, setValue] = useState<string>('')
    const searchItems = useSearchItems(value, items)

    const {setSelected} = useFilterFreelancerActions()
    const onSelected = (name: string) => {
        return (selected: boolean) => {
            setSelected({field: labelSlug, name: name, selected})
        }
    }

    return (
        <section className={classes.filterItem}>
            <OpenFilter mobile={mobile} label={label}>
                { search && <SearchFilter value={value} setValue={setValue} /> }
                <FilterFreelancerList
                    labelSlug={labelSlug} 
                    mobile={mobile} 
                    onSelected={onSelected} 
                    items={searchItems} 
                />
                {children}
            </OpenFilter>
        </section>
    )
}