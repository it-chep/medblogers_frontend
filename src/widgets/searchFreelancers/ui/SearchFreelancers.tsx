"use client"

import { FC, PropsWithChildren, useState } from "react";
import { MyModal } from "@/src/shared/ui/myModal";
import classes from './search.module.scss'
import { SearchInput } from "@/src/features/searchInput";
import { ISearchFreelancers, SearchResultFreelancer } from "@/src/entities/freelancer";
import { searchFreelancersService } from "../api/SearchFreelancersService";


export const SearchFreelancers: FC<PropsWithChildren> = ({children}) => {

    const [open, setOpen] = useState<boolean>(false)
    const [searchResult, setSearchResult] = useState<ISearchFreelancers | null>(null)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const onOpen = () => setOpen(true)

    const search = async (value: string) => {
        if(!value){
            setSearchResult(null)
            return
        }
        try{
            setIsLoading(true)
            const searchRes = await searchFreelancersService.get(encodeURI(value))
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
                <SearchResultFreelancer 
                    result={searchResult} 
                    setOpen={setOpen}
                    isLoading={isLoading}
                />
            </MyModal>
        </section>
    )
}