import { FC } from "react";
import classes from './searchResult.module.scss'
import { ISearchDoctors } from "../../model/types";
import { ItemList } from "../itemList/ItemList";
import { SearchMiniature } from "@/src/entities/doctor";


interface IProps {
    result: ISearchDoctors;
    setOpen: (open: boolean) => void;
}

export const SearchResult: FC<IProps> = ({result, setOpen}) => {


    
    return (
        <section className={classes.wrapper}>
            <ItemList 
                labelName='Города' 
                items={result.cities} 
                setOpen={setOpen} 
            />
            <ItemList 
                labelName='Специальности' 
                items={result.specialities} 
                setOpen={setOpen} 
            />
            <section className={classes.doctors}>
                <h4>Доктора</h4>
                {result.data.map((doctor, ind) => 
                    <SearchMiniature 
                        key={ind}
                        doctor={doctor} 
                    />
                )}
            </section>
        </section>
    )
}