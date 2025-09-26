"use client"

import { FC, PropsWithChildren, useState } from "react";
import { MyModal } from "@/src/shared/ui/myModal";
import classes from './searchDoctors.module.scss'
import { SearchInput } from "@/src/features/searchInput";
import { searchDoctorsService } from "../../api/SearchDoctorsService";
import { ISearchDoctors, SearchResult } from "@/src/entities/doctor";


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
            <SearchInput onChange={onChange} onFocus={onOpen} />
            <MyModal open={open} setOpen={setOpen}>
                <SearchResult isLoading={isLoading} setOpen={setOpen} result={searchResult} />     
            </MyModal>
            <section className={classes.openFilterForMobile}>
                {children}
            </section>
        </section>
    )
}