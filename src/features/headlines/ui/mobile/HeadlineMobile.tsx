"use client"

import { FC, PropsWithChildren, useEffect, useState } from "react";
import classes from './mobile.module.scss'
import { List } from "../list/List";
import { createPortal } from "react-dom";
import { Curtain } from "@/src/shared/ui/curtain";
import { useCheckTargetHeadline } from "../../lib/hooks/useCheckTargetHeadline";


export const HeadlineMobile: FC<PropsWithChildren> = () => {

    const [open, setOpen] = useState<boolean>(false)
    const [isMobile, setIsMobile] = useState<boolean>(true)

    const [headlines, setHeadlines] = useState<Element[]>([])    
    const selectedHeadline = useCheckTargetHeadline(headlines)
        
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

    const onOpen = () => {
        setOpen(true)
        document.body.style.overflow = 'hidden'
    }

    const onClose = () => {
        setOpen(false)
        document.body.style.overflow = ''
    }

    useEffect(() => {
        const onResize = () => {
            if(window.innerWidth > 850){
                setIsMobile(false)
            }
            else{
                setIsMobile(true)
            }
        }

        window.addEventListener('resize', onResize)

        return () => {
            document.body.style.overflow = ''
            window.removeEventListener('resize', onResize)
        }
    }, [])

    return (
        headlines.length
            ?
        <>
            <section className={classes.bottom}>
                <ul onClick={onOpen} className={classes.slider} style={{color: `var(--blue)`}}>
                    {headlines.map(headline => 
                        <li 
                            key={headline.textContent}
                            className={classes.item + (selectedHeadline === headline ? ` ${classes.selected}` : '')} 
                        />
                    )}
                </ul>
            </section>
            {isMobile && createPortal(
                <Curtain 
                    onCloseWrap={onClose}
                    openWrap={open}
                    initClose
                    backgroundColor="var(--light-black)"
                >
                    <section className={classes.list}> 
                        <List 
                            headlines={headlines}
                            selectedHeadline={selectedHeadline}
                            setOpen={onClose}
                        />
                    </section>
                </Curtain>,
                document.body
            )}
            {
                open && isMobile
                    &&
                createPortal(
                    <section onClick={onClose} className={classes.darken} />,
                    document.body
                )
            }
        </>
            :
        <></>
)}