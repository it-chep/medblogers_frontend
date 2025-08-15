import { FC, useRef, useState } from "react";
import { SearchList } from "../searchList/SearchList";
import classes from './search.module.scss'
import { Badge } from "../badge/Badge";
import { useSearchItems } from "../../lib/hooks/useSearchItems";


interface IProps {
    label: string;
    items: string[];
    setSelected: (selected: string) => void;
    deleteSelected: (name: string) => void;
    seletedItems: string[];
    placeholder: string;
}

export const Search: FC<IProps> = ({items, setSelected, deleteSelected, label, seletedItems, placeholder}) => {

    const inputRef = useRef<HTMLInputElement>(null)
    const [value, setValue] = useState<string>('')  

    const searchItems = useSearchItems(value, items, seletedItems)

    const onSelected = (selected: string) => {
        setSelected(selected)
        setValue('')
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
                <input ref={inputRef} placeholder={seletedItems.length === 0 ? placeholder : ''} type="text" value={value} onChange={e => setValue(e.target.value)} />
            </section>

            {
                searchItems.length !== 0
                    &&
                <SearchList itemList={searchItems} onSelected={onSelected} />
            }

        </section>
    )
}