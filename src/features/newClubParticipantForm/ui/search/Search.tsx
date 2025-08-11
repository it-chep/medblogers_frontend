import { FC, useEffect, useMemo, useState } from "react";
import { MyInput } from "../input/MyInput";
import { SearchList } from "../searchList/SearchList";
import { TItem } from "../../model/types";




interface IProps {
    items: TItem[];
    setSelected: (selected: TItem) => void;
    seletedItems: TItem[];
}


export const Search: FC<IProps> = ({items, setSelected, seletedItems}) => {


    const [searchItems, setSearchItems] = useState<TItem[]>(items)

    const [value, setValue] = useState<string>('') 
 
    
    const filteredItems = useMemo(() => {
        if (!value) return [];
        
        const targetItems = items.filter(item => 
            item.name.toLowerCase().includes(value.toLowerCase()) && 
            !seletedItems.includes(item)
        );
        return targetItems;
    }, [value, items, seletedItems]);

    useEffect(() => {
        setSearchItems(filteredItems);
    }, [filteredItems]);

    const onSelected = (selected: TItem) => {
        setSelected(selected)
        setValue('')
        setSearchItems([])
    }

    return (
        <section>
            <MyInput value={value} setValue={setValue} />

            <SearchList itemList={searchItems} onSelected={onSelected} />

        </section>
    )
}