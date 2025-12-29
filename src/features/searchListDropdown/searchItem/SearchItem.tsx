import { FC, useEffect, useMemo, useRef, useState } from "react";
import classes from './searchItem.module.scss'
import { useSearchItems } from "@/src/shared/lib/hooks/useSearchItems";
import { MyInputForm } from "@/src/shared/ui/inputForm";
import { SearchList } from "@/src/shared/ui/searchList";
import { IItem } from "@/src/shared/model/types";

interface IProps {
    setSelectedId: (id: number) => void;
    selectedItemId: number;
    items: IItem[]
    label: string;
    placeholder: string;
    placeholderSearch: string;
    error?: string;
    setError?: () => void;
}

export const SearchItemListDropdown: FC<IProps> = (
    {selectedItemId, setSelectedId, items, label, placeholder, placeholderSearch, error, setError}
) => {

    const [value, setValue] = useState<string>('')

    const searchItems = useSearchItems(value, items, [selectedItemId])
    const inputRef = useRef<HTMLInputElement>(null)
    const [open, setOpen] = useState<boolean>(false)

    const onOpen = () => setOpen(true)
  
    const selectedItem = useMemo(() => {
        const selected: IItem | undefined = items.find(i => selectedItemId === i.id)
        return selected
    }, [selectedItemId])
    
    function onClose(e: Event) {
        const target = e.target as HTMLElement
        if(!target.closest(`.${classes.inputBox}`) && !target.closest(`.${classes.search}`)){
            setOpen(false)
            document.body.removeEventListener('click', onClose)
        }
    }

    useEffect(() => {
        if(open){
            if(inputRef.current) inputRef.current.focus()
            document.body.addEventListener('click', onClose) 
        }
    }, [open])

    const onSelected = (id: number) => {
        setValue('')
        setSelectedId(id)
        setOpen(false)
        setError && setError()
        document.body.removeEventListener('click', onClose)
    }

    return (
        <section className={classes.wrapper + (error ? ` ${classes.error}` : '')}>
            <span className={classes.label}>
                {label}
            </span>
            <section onClick={onOpen} className={classes.inputBox}>
                <section className={classes.input}>
                    <MyInputForm
                        error={error} 
                        setError={setError} 
                        placeholder={placeholder}
                        value={selectedItem?.name || ''} 
                        setValue={() => {}} 
                    />
                </section>
            </section>
            {
                open
                    &&
                <section className={classes.search}>
                    <section className={classes.input}>
                        <MyInputForm 
                            ref={inputRef} 
                            value={value} 
                            setValue={setValue} 
                            placeholder={placeholderSearch}
                        />
                    </section>
                    <section className={classes.list}>
                        <SearchList itemList={searchItems} onSelected={onSelected} />
                    </section>
                </section>
            }
        </section>
    )
}