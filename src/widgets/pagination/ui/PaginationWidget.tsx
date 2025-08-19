"use client"

import { FC, useEffect, useMemo, useState } from "react";
import classes from './paginationWidget.module.scss'
import { useSearchParams } from "next/navigation";
import { paginationService } from "../api/PaginationService";
import { Pagination } from "@/src/features/pagination";
import { LoaderContainer } from "@/src/shared/ui/loaderContainer";



export const PaginationWidget: FC = () => {

    const searchParams = useSearchParams()
    const [pagesCount, setPagesCount] = useState<number>(0)
    const [isLoading, setIsLoading] = useState<boolean>(true)

    const paramsKey = useMemo(() => {
        const params = new URLSearchParams(searchParams.toString());
        params.delete('page');
        params.delete('sort')
        return params.toString();
    }, [searchParams]);

    const getData = async () => {
        try{
            setIsLoading(true)
            const pagesCount: string = await paginationService.get(searchParams.toString())
            setPagesCount(+pagesCount)
        }
        catch(e){
            console.log(e)
        }
        finally{
            setIsLoading(false)
        }
    }

    useEffect(() => {
        getData()
    }, [paramsKey])

    return (
        <section className={classes.wrapper}>
            {
                isLoading
                    ?
                <section className={classes.loader}><LoaderContainer /></section>
                    :
                pagesCount <= 1
                    ?
                <></>
                    :
                <Pagination totalPages={pagesCount} />
            }
        </section>
    )
}