import { FC, useEffect, useMemo, useRef, useState } from "react";
import { MyInput } from "../input/MyInput";
import { SearchList } from "../searchList/SearchList";
import classes from './search.module.scss'
import { Badge } from "../badge/Badge";


interface IProps {
    label: string;
    items: string[];
    setSelected: (selected: string) => void;
    deleteSelected: (name: string) => void;
    seletedItems: string[];
}

export const Search: FC<IProps> = ({items, setSelected, deleteSelected, label, seletedItems}) => {


    const [searchItems, setSearchItems] = useState<string[]>(items)
    const inputRef = useRef<HTMLInputElement>(null)
    const [value, setValue] = useState<string>('') 
 
    
    const filteredItems = useMemo(() => {
        if (!value) return [];
        
        const targetItems = items.filter(item => 
            item.toLowerCase().includes(value.toLowerCase()) && 
            !seletedItems.includes(item)
        );
        return targetItems;
    }, [value, items, seletedItems]);

    useEffect(() => {
        setSearchItems(filteredItems);
    }, [filteredItems]);

    const onSelected = (selected: string) => {
        setSelected(selected)
        setValue('')
        setSearchItems([])
        if(inputRef.current) inputRef.current.focus()
    }

    return (
        <section className={classes.wrapper}>
            <span className={classes.label}>
                {label}
            </span>
            <section className={classes.result}>
                {seletedItems.map(item => 
                    <Badge 
                        key={item} 
                        name={item} 
                        onSelected={deleteSelected} 
                    />
                )}
                <input ref={inputRef} placeholder={seletedItems.length === 0 ? 'Введите название города...' : ''} type="text" value={value} onChange={e => setValue(e.target.value)} />
            </section>

            {
                searchItems.length !== 0
                    &&
                <SearchList itemList={searchItems} onSelected={onSelected} />
            }

        </section>
    )
}