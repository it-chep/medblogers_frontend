"use client"

import ReduxProvider from "@/src/app/store/StoreProvider";
import { FC, useEffect, useState } from "react";
import { Filters } from "./Filters";
import { IFilterFreelancer } from "@/src/entities/filterFreelancer";


interface IProps {
    forDesk: boolean;
    filters: IFilterFreelancer;
}

export const FiltersFreelancersLayout: FC<IProps> = ({forDesk, filters}) => {

    const [isMobile, setIsMobile] = useState<boolean>(false)
    const [isLoading, setIsLoading] = useState<boolean>(true)

    const checkMobile = () => {
        const width = window.innerWidth;
        if(width < 480){
            setIsMobile(true)
        }
        else{
            setIsMobile(false)
        }
    }
    
    function onSize() {
        checkMobile()
    }
    
    useEffect(() => {
        checkMobile()
        window.addEventListener('resize', onSize)
        setIsLoading(false)
    }, [])

        
    return(
        isLoading
            ?
        <></>
            :
        (!isMobile && forDesk) || (isMobile && !forDesk)
            ?
        <ReduxProvider>
            <Filters filtersRes={filters} forDesk={forDesk} />
        </ReduxProvider>
            :
        <></>
    )
}