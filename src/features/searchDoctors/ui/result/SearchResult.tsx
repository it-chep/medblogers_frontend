import { FC } from "react";
import classes from './searchResult.module.scss'
import { ISearchDoctors } from "../../model/types";
import { ItemList } from "../itemList/ItemList";
import { SearchMiniature } from "@/src/entities/doctor";
import { MyLoaderSpinner } from "@/src/shared/ui/myLoaderSpinner";


interface IProps {
    result: ISearchDoctors | null;
    setOpen: (open: boolean) => void;
    isLoading: boolean;
}

export const SearchResult: FC<IProps> = ({result, setOpen, isLoading}) => {


    
    return (
        <section className={classes.wrapper}>
            {
                isLoading
                    ?
                <section className={classes.loader}>
                    <MyLoaderSpinner />
                </section>
                    :
                !result
                    ?
                <></>
                    :
                result.cities.length === 0 && result.data.length === 0 && result.specialities.length === 0
                    ?
                <p className={classes.empty}>Нет подходящих врачей.</p>
                    :
                <>
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
                </>
            }
        </section>
    )
}