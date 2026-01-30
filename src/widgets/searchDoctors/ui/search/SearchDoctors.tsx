"use client"

import { FC, PropsWithChildren, useState } from "react";
import { MyModal } from "@/src/shared/ui/myModal";
import classes from './searchDoctors.module.scss'
import { SearchInput } from "@/src/features/searchInput";
import { ISearchDoctors, SearchResultDoctors } from "@/src/entities/doctor";
import { searchDoctorsService } from "../../api/SearchDoctorsService";

export const SearchDoctors: FC<PropsWithChildren> = ({children}) => {

    const [open, setOpen] = useState<boolean>(false)
    const [searchResult, setSearchResult] = useState<ISearchDoctors | null>(null)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const onOpen = () => setOpen(true)

    const search = async (value: string) => {
        if(!value){
            setSearchResult(null)
            return
        }
        try{
            setIsLoading(true)
            const searchRes = await searchDoctorsService.get(encodeURI(value))
            setSearchResult(searchRes)
        }
        catch(e: any){
            if(e.name === 'AbortError'){
                return
            }
            console.log(e)
        }
        finally{
            setIsLoading(false)
        }

    } 

    const onChange = (value: string) => {
        search(value)
    }   

    return (
        <section className={classes.wrapper}>
            <section className={classes.search}>
                <SearchInput onChange={onChange} onFocus={onOpen} />
                {
                    children
                        &&
                    <section className={classes.openFilterForMobile}>
                        {children}
                    </section>
                }
            </section>
                <MyModal open={open} setOpen={setOpen}>
                    <SearchResultDoctors isLoading={isLoading} setOpen={setOpen} result={searchResult} />     
                </MyModal>
        </section>
    )
}