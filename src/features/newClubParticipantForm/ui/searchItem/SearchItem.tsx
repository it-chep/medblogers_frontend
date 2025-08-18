import { FC, MouseEvent, useEffect, useRef, useState } from "react";
import classes from './searchItem.module.scss'
import { MyInput } from "../input/MyInput";
import { SearchList } from "../searchList/SearchList";
import { useSearchItems } from "../../lib/hooks/useSearchItems";


interface IProps {
    setSelected: (item: string) => void;
    selectedItem: string;
    items: string[]
    label: string;
    placeholder: string;
    placeholderSearch: string;
    error?: string;
    setError?: () => void;
}

export const SearchItem: FC<IProps> = (
    {selectedItem, setSelected, items, label, placeholder, placeholderSearch, error, setError}
) => {


    const [value, setValue] = useState<string>('')

    const searchItems = useSearchItems(value, items, [selectedItem])
    const inputRef = useRef<HTMLInputElement>(null)
    const [open, setOpen] = useState<boolean>(false)

    const onOpen = () => setOpen(true)
    
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

    const onSelected = (item: string) => {
        setValue('')
        setSelected(item)
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
                    <MyInput 
                        error={error} 
                        setError={setError} 
                        placeholder={placeholder}
                        value={selectedItem} 
                        setValue={() => {}} 
                    />
                </section>
            </section>
            {
                open
                    &&
                <section className={classes.search}>
                    <section className={classes.input}>
                        <MyInput 
                            ref={inputRef} 
                            value={value} 
                            setValue={setValue} 
                            placeholder={placeholderSearch}
                        />
                    </section>
                    <section className={classes.list}>
                        {
                            value.length !== 0 
                                ?
                            searchItems.length !== 0
                                &&
                            <SearchList itemList={searchItems} onSelected={onSelected} />
                                :
                            <span className={classes.sign}>Пожалуйста, введите хотя бы 1 символ</span>
                        }
                    </section>
                </section>
            }
        </section>
    )
}