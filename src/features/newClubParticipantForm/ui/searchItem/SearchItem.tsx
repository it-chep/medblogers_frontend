import { FC, useEffect, useState } from "react";
import classes from './searchItem.module.scss'
import { MyInput } from "../input/MyInput";
import { SearchList } from "../searchList/SearchList";
import { useSearchItems } from "../../lib/hooks/useSearchItems";


interface IProps {
    setSelected: (item: string) => void;
    selectedItem: string;
    items: string[]

}

export const SearchItem: FC<IProps> = ({selectedItem, setSelected, items}) => {


    const [value, setValue] = useState<string>('')

    const searchItems = useSearchItems(value, items, [selectedItem])

    return (
        <section className={classes.wrapper}>
            <section className={classes.inputBox}>
                <MyInput value={selectedItem} setValue={() => {}} />
            </section>
            
            {/* <section>
                <section>
                    <MyInput value={value} setValue={setValue} />
                </section>

                    <SearchList itemList={searchItems} onSelected={setSelected} />
            </section> */}
        </section>
    )
}