"use client"

import { FC, useEffect, useState } from "react";
import classes from './headlines.module.scss'
import { List } from "../list/List";
import { useCheckTargetHeadline } from "../../lib/hooks/useCheckTargetHeadline";

export const Headlines: FC = () => {

    const [headlines, setHeadlines] = useState<Element[]>([])    
    const selectedHeadline = useCheckTargetHeadline(headlines)

    const getHeadlines = () => {
        const h2h3 = document.querySelectorAll('main h2') // убрали h3 из оглавления
        const elemsContent: Element[] = [];
        for(let elem of h2h3){
            elemsContent.push(elem)
        }
        setHeadlines(elemsContent)
    }

    useEffect(() => {
        getHeadlines()
    }, [])

    return (
        headlines.length
            ?
        <section className={classes.desktop}>
            <List 
                headlines={headlines}
                selectedHeadline={selectedHeadline}
            />
        </section>
            :
        <></>
    )
}