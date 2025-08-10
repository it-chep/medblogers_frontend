import { FC } from "react";
import classes from './searchResult.module.scss'
import { ISearchDoctors } from "../../model/types";
import { ItemList } from "../itemList/ItemList";
import { SearchMiniature } from "@/src/entities/doctor";
import { LoaderSpinner } from "@/src/shared/ui/loaderSpinner";


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
                    <LoaderSpinner />
                </section>
                    :
                !result
                    ?
                <></>
                    :
                result.cities.length === 0 && result.doctors.length === 0 && result.specialities.length === 0
                    ?
                <p className={classes.empty}>Нет подходящих врачей.</p>
                    :
                <>
                    {
                        result.cities.length !== 0
                            &&
                        <ItemList 
                            labelName='Города' 
                            items={result.cities} 
                            setOpen={setOpen} 
                        />
                    }
                    {
                        result.specialities.length !== 0
                            &&
                        <ItemList 
                            labelName='Специальности' 
                            items={result.specialities} 
                            setOpen={setOpen} 
                        />
                    }
                    {
                        result.doctors.length !== 0
                            &&
                        <section className={classes.doctors}>
                            <h4>Доктора</h4>
                            {result.doctors.map((doctor, ind) => 
                                <SearchMiniature 
                                    key={ind}
                                    doctor={doctor} 
                                />
                            )}
                        </section>
                    }
                </>
            }
        </section>
    )
}