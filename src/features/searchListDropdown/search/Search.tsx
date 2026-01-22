import { FC, ReactElement, useEffect, useMemo, useRef, useState } from "react";
import classes from './search.module.scss'
import { useSearchItems } from "../../../shared/lib/hooks/useSearchItems";
import { SearchList } from "@/src/shared/ui/searchList";
import { BadgeDelete } from "../badgeDelete/BadgeDelete";
import { IItem } from "@/src/shared/model/types";

interface IProps {
    label: string | ReactElement;
    items: IItem[];
    setSelected: (selectedId: number) => void;
    deleteSelected?: (id: number) => void;
    selectedItemsId: number[];
    placeholder: string;
    error?: string;
    setError?: () => void;
    emptyLabel?: string;
}

export const SearchListDropdown: FC<IProps> = (
    {items, setSelected, deleteSelected = () => {}, label, selectedItemsId, placeholder, error, setError, emptyLabel}
) => {

    const inputRef = useRef<HTMLInputElement>(null)
    const [value, setValue] = useState<string>('')  
    const [open, setOpen] = useState<boolean>(false)
    const resultRef = useRef<HTMLDivElement>(null)

    const searchItems = useSearchItems(value, items, selectedItemsId)

    const selectedItems = useMemo(() => {
        const selected: IItem[] = []
        for (let i = 0; i < selectedItemsId.length; i++){
            const selectedId = selectedItemsId[i]
            const target = items.find(item => item.id === selectedId)
            if(target) selected.push(target)
        }
        return selected
    }, [selectedItemsId])

    const onSelected = (selectedId: number) => {
        setError && setError()
        setSelected(selectedId)
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

    const deleteSelectedWrap = (id: number) => {
        if(deleteSelected){
            deleteSelected(id)
            setError && setError()
        }
    }

    return (
        <section className={classes.wrapper}>
            <span className={classes.label}>
                {label}
            </span>
            <section ref={resultRef} className={classes.result}>
                {selectedItems.map(item => 
                    <BadgeDelete
                        key={item.id} 
                        item={item} 
                        onSelected={deleteSelectedWrap} 
                    />
                )}
                <input 
                    onFocus={() => setOpen(true)}
                    ref={inputRef} 
                    placeholder={selectedItems.length === 0 ? placeholder : ''} 
                    type="text" 
                    value={value} 
                    onChange={e => setValue(e.target.value)} 
                />
            </section>
            {
                emptyLabel && (!searchItems.length)
                    &&
                <section className={classes.empty}>
                    {emptyLabel}
                </section>
            }
            {
                searchItems.length !== 0 && open
                    &&
                <SearchList 
                    itemList={searchItems} 
                    onSelected={onSelected} 
                />
            }
            { (error) && <span className={classes.errorText}>*{error}</span> }
        </section>
    )
}