"use client"

import { FC, PropsWithChildren, useEffect, useRef, useState } from "react";
import classes from './openBlockFAQ.module.scss'

interface IProps {
    title: string;
    text: string;
}

export const OpenBlockFAQ: FC<IProps & PropsWithChildren> = ({
    title, text, children
}) => {

    const refContainer = useRef<HTMLDivElement>(null)
    const refWrapper = useRef<HTMLDivElement>(null)
    const refHeader = useRef<HTMLDivElement>(null)
    const refBG = useRef<HTMLDivElement>(null)

    const [open, setOpen] = useState<boolean>(false)


    const changeOpen = (open: boolean) => {

        const padding = window.innerWidth < 480 ? 40 : 60
        
        if(refBG.current && refContainer.current && refHeader.current) {
            if(open){   
                const height = refContainer.current.scrollHeight;
                refBG.current.style.height = height + padding + 'px'
            }
            else {
                const height = refHeader.current.scrollHeight;
                refBG.current.style.height = height + padding + 'px'
            }
        }
    }

    useEffect(() => {
        changeOpen(false)
    }, [])

    const onClick = () => {
        const newOpen = !open
        changeOpen(newOpen)
        setOpen(newOpen)
    }

    const refOpen = useRef<boolean>(false)

    useEffect(() => {
        refOpen.current = open;
    }, [open])

    useEffect(() => {

        const handleResize = () => changeOpen(refOpen.current)

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return (
        <section onClick={onClick} ref={refBG} className={classes.bg}>
            <section ref={refWrapper} className={classes.wrapper}>
                <section ref={refContainer} className={classes.container}>
                    <section ref={refHeader} className={classes.header}>
                        <section className={classes.title}>
                            {title}
                        </section>
                        <svg className={open ? classes.open : ''} width="30" height="20" viewBox="0 0 30 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <mask id="mask0_1580_156535" maskUnits="userSpaceOnUse" x="0" y="-3" width="30" height="27">
                                <path d="M0 -2.17485V23.9121H30V-2.17485H0Z" fill="white"/>
                            </mask>
                            <g mask="url(#mask0_1580_156535)">
                                <path d="M3.38862 18.5781L1.11719 16.2716L13.4965 3.70863C13.6948 3.50602 13.9307 3.34533 14.1905 3.23559C14.4504 3.12602 14.729 3.0695 15.0104 3.0695C15.2918 3.0695 15.5705 3.12602 15.8303 3.23559C16.0901 3.34533 16.326 3.50602 16.5243 3.70863L28.9101 16.2716L26.6386 18.576L15.0136 6.78465L3.38862 18.5781Z" fill="white" fillOpacity="0.5"/>
                            </g>
                        </svg>
                    </section>
                    <section className={classes.text}>
                        {text || children}
                    </section>
                </section>
            </section>
        </section>
    )
}