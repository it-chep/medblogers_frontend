"use client"

import { FC, useState } from "react";
import classes from './searchBlog.module.scss'
import { SearchInput } from "@/src/shared/ui/searchInput";
import { BlogSearchItems, blogService, IBlogSearch } from "@/src/entities/blog";
import { MyModal } from "@/src/shared/ui/myModal";

interface IProps {

}

export const SearchBlog: FC<IProps> = ({}) => {

    const [open, setOpen] = useState<boolean>(false)
    const [searchResult, setSearchResult] = useState<IBlogSearch[] | null>(null)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    
    const onOpen = () => setOpen(true)

    const search = async (value: string) => {
        if(!value){
            setSearchResult(null)
            return
        }
        try{
            setIsLoading(true)
            const searchRes = await blogService.search(value)
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
                <SearchInput 
                    open={open}
                    onChange={onChange} 
                    onFocus={onOpen} 
                    placeholder="Найти статью"
                />
            </section>
            <MyModal open={open} setOpen={setOpen}>
                <BlogSearchItems 
                    blogs={searchResult} 
                    isLoading={isLoading} 
                />
            </MyModal>
        </section>
    )
}