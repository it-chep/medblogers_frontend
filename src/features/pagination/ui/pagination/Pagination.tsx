"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { FC, useState } from "react";
import classes from './pagination.module.scss'
import { SwitchPages } from "../switchPages/SwitchPages";

interface IProps {
    totalPages: number;
}


export const Pagination: FC<IProps> = ({totalPages}) => {

    const searchParams = useSearchParams()
    const pathname = usePathname()
    const router = useRouter()

    const [currentPage, setCurrentPage] = useState<number>(searchParams.get('page') ? Number(searchParams.get('page')) : 1)

    const getVisiblePages = () => {
   
        let allPages: boolean[] = [] 
    
        for (let i = 0; i < totalPages; i++){
            allPages[i] = false;     
        }
        
        if(currentPage < 3){
            for(let i = 0; i < Math.min(totalPages - 1, 3); i++){
                allPages[i] = true;
            }
            allPages[totalPages - 1] = true;
        }
        else if(currentPage > totalPages - 2) {
            allPages[0] = true;
            allPages[totalPages - 3] = true;
            allPages[totalPages - 2] = true;
            allPages[totalPages - 1] = true;
        }
        else{
            for (let i = 1; i < totalPages - 1; i++){
                if(i >= currentPage - 2 && i < currentPage + 1){
                    allPages[i] = true
                }
            }
            allPages[0] = true;
            allPages[totalPages - 1] = true;
        }

        const targetPages: number[] = []

        let i = 0;
        while(i < allPages.length){
            if(allPages[i]){
                targetPages.push(i + 1)
                i++;
            }
            else{
                targetPages.push(-1)
                while((i < allPages.length) && (!allPages[i])){
                    i++;
                }
            }   
        }

        return targetPages
    }
   


    // const isOne = useRef<boolean>(true)
    
    // useEffect(() => {
    //     if(isOne.current){
    //         isOne.current = false;
    //         return
    //     }
    // }, [currentPage])
    

    const onSelected = (page: number) => {
        window.scrollTo({top: 0})
        const params = new URLSearchParams(searchParams)
        params.set('page', `${page}`)
        setCurrentPage(page)
        const newUrl = `${pathname}?${params.toString()}`
        router.replace(newUrl)
    }

    return (
        <section className={classes.container}>
            <SwitchPages
                onSelected={onSelected}
                currentPage={currentPage}
                totalPages={totalPages}
            >
                {getVisiblePages().map((page, ind) => {
                    return page !== -1
                        ?
                    (<span key={ind} onClick={() => onSelected(page)} className={classes.page + (currentPage === page ? (' ' + classes.selected) : '')}>{page}</span>)
                        :
                    (<span key={ind} className={classes.ellipsis}>...</span>)
                })}
            </SwitchPages>
        </section>
    )
}