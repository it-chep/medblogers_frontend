"use client"

import { FC, useState } from "react";
import { SearchInput } from "../searchInput/SearchInput";
import { MyModal } from "@/src/shared/ui/myModal";
import classes from './searchDoctors.module.scss'
import { searchDoctorsService } from "../../api/SearchDoctorsService";
import { ISearchDoctors } from "../../model/types";
import { SearchResult } from "../result/SearchResult";


export const SearchDoctors: FC = () => {

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
        catch(e){
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
            <SearchInput onChange={onChange} onFocus={onOpen} />
            <MyModal open={open} setOpen={setOpen}>
                <SearchResult isLoading={isLoading} setOpen={setOpen} result={searchResult} />     
            </MyModal>
        </section>
    )
}