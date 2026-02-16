"use client"

import { FC, useEffect, useState } from "react";
import classes from './headlinesBlog.module.scss'
import { Headlines } from "@/src/features/headlines";

export const HeadlinesBlog: FC = () => {

    const [headlines, setHeadlines] = useState<Element[]>([])    

    const getHeadlines = () => {
        const h2h3 = document.querySelectorAll('main h2,h3')
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
        <section className={classes.container}>
            <Headlines 
                headlines={headlines}
            />
        </section>
            :
        <></>
    )
}