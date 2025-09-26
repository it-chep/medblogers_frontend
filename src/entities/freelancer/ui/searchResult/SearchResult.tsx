import { FC } from "react";
import classes from './searchResult.module.scss'
import { ItemList } from "../searchItemList/ItemList";
import { LoaderSpinner } from "@/src/shared/ui/loaderSpinner";
import { ISearchFreelancers } from "../../model/types";
import { SearchMiniature } from "../searchMiniature/SearchMiniature";


interface IProps {
    result: ISearchFreelancers | null;
    setOpen: (open: boolean) => void;
    isLoading: boolean;
}

export const SearchResultFreelancer: FC<IProps> = ({result, setOpen, isLoading}) => {


    
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
                result.cities.length === 0 && result.freelancers.length === 0 && result.specialities.length === 0
                    ?
                <p className={classes.empty}>Нет подходящих специалистов.</p>
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
                        result.freelancers.length !== 0
                            &&
                        <section className={classes.freelancers}>
                            <h4>Доктора</h4>
                            {result.freelancers.map((freelancer, ind) => 
                                <SearchMiniature
                                    key={ind}
                                    freelancer={freelancer} 
                                />
                            )}
                        </section>
                    }
                </>
            }
        </section>
    )
}