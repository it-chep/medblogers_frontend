"use client"

import { FC, useEffect, useRef, useState } from "react";
import classes from './headlines.module.scss'
import { List } from "../list/List";
import { HeadlineMobile } from "../mobile/HeadlineMobile";

interface IProps {
    headlines: Element[];
    isMobile: boolean;
}

export const Headlines: FC<IProps> = ({headlines, isMobile}) => {

    const [selectedHeadline, setSelectedHeadline] = useState<Element | null>(null)
    const headlinesRef = useRef<Element[]>(headlines)

    useEffect(() => {
        headlinesRef.current = headlines;
    }, [headlines])

    const checkTargetHeadline = (headlines: Element[]) => {
        const currentTop = window.scrollY;
        const currentBottom = window.scrollY + window.innerHeight;
        let firstElem: Element | null = null;
        for(let headline of headlines){
            const elemTop = headline.getBoundingClientRect().top + window.scrollY;
            if((elemTop > currentTop) && (elemTop < currentBottom)){
                firstElem = headline;
                break
            }
        }
        if(!firstElem){
            for(let headline of [...headlines].reverse()){
                const elemTop = headline.getBoundingClientRect().top + window.scrollY;
                if(elemTop < currentBottom){
                    firstElem = headline;
                    break
                }
            }
        }
        if(firstElem){
            setSelectedHeadline(firstElem)
        }
        else{
            setSelectedHeadline(null)
        }
    }
    
    useEffect(() => {
        const checkTargetHeadlineWrap = () => {
            checkTargetHeadline(headlinesRef.current)
        }
        window.addEventListener('scroll', checkTargetHeadlineWrap)

        checkTargetHeadlineWrap()

        return () => {
            window.removeEventListener('scroll', checkTargetHeadlineWrap)
        }
    }, [])


    return (
        headlines.length
            ?
        !isMobile
            ?
        <section className={classes.desktop}>
            <List 
                headlines={headlines}
                selectedHeadline={selectedHeadline}
            />
        </section>
            :
        <section className={classes.mobile}>
            <HeadlineMobile 
                headlines={headlines}
                selectedHeadline={selectedHeadline}
            />
        </section>
            :
        <></>
    )
}