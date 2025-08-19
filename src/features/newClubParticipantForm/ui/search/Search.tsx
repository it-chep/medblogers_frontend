import { FC, useEffect, useRef, useState } from "react";
import { SearchList } from "../searchList/SearchList";
import classes from './search.module.scss'
import { Badge } from "../badge/Badge";
import { useSearchItems } from "../../lib/hooks/useSearchItems";


interface IProps {
    label: string;
    items: string[];
    setSelected: (selected: string) => void;
    deleteSelected?: (name: string) => void;
    selectedItems: string[];
    placeholder: string;
}

export const Search: FC<IProps> = ({items, setSelected, deleteSelected = () => {}, label, selectedItems, placeholder}) => {

    const inputRef = useRef<HTMLInputElement>(null)
    const [value, setValue] = useState<string>('')  
    const [open, setOpen] = useState<boolean>(false)
    const resultRef = useRef<HTMLDivElement>(null)

    const searchItems = useSearchItems(value, items, selectedItems)

    const onSelected = (selected: string) => {
        setSelected(selected)
        setValue('')
        if(inputRef.current) inputRef.current.focus()
    }

        
    function onClose(e: Event) {
        const target = e.target as HTMLElement
        if(!target.closest(`.${classes.wrapper}`)){
            setOpen(false)
            document.body.removeEventListener('click', onClose)
        }
    }

    useEffect(() => {
        if(value.length > 0){
            setOpen(true)
        }
    }, [value])

    useEffect(() => {
        if(open){
            document.body.addEventListener('click', onClose) 
        }
    }, [open])

    // useEffect(() => {
    //     if(resultRef.current && inputRef.current){
    //         inputRef.current.addEventListener('focus', () => resultRef.current?.classList.add(classes.focus))
    //         inputRef.current.addEventListener('blur', () => resultRef.current?.classList.remove(classes.focus))
    //     }
    // }, [])

    return (
        <section className={classes.wrapper}>
            <span className={classes.label}>
                {label}
            </span>
            <section ref={resultRef} className={classes.result}>
                {selectedItems.map(item => 
                    <Badge 
                        key={item} 
                        name={item} 
                        onSelected={deleteSelected} 
                    />
                )}
                <input 
                    ref={inputRef} 
                    placeholder={selectedItems.length === 0 ? placeholder : ''} 
                    type="text" 
                    value={value} 
                    onChange={e => setValue(e.target.value)} 
                />
            </section>

            {
                searchItems.length !== 0 && open
                    &&
                <SearchList itemList={searchItems} onSelected={onSelected} />
            }

        </section>
    )
}