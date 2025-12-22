"use client"

import { FC, MouseEvent, PropsWithChildren, useEffect, useRef } from "react";
import classes from './openFilter.module.scss'

interface IProps {
    label: string;
    mobile?: boolean;
}

export const OpenFilter: FC<IProps & PropsWithChildren> = ({label, mobile = null, children}) => {

    const refSvg = useRef<SVGSVGElement>(null)
    const refContainer = useRef<HTMLDivElement>(null)

    const onClick = () => {
        const targetSvg = refSvg.current;
        const targetContainer = refContainer.current;
        if(targetSvg && targetContainer){
            targetSvg.classList.toggle(classes.open)
            targetContainer.classList.toggle(classes.open)
            targetContainer.classList.toggle('open')
        }
    }
    
    const isOne = useRef<boolean>(true)
    useEffect(() => {
        if(isOne.current && mobile && refSvg && refContainer){
            onClick()
            isOne.current = false;
        }
    }, [refSvg, refContainer])

    const cancelSelection = (e: MouseEvent) => {
        e.preventDefault()
    }

    return (
        <section className={classes.wrapper + (mobile ? ` ${classes.mobile}` : '')}>
            <section className={classes.label} onMouseDown={cancelSelection} onClick={onClick}>
                <section className={classes.svgBox}>
                    <svg ref={refSvg}  className={classes.arrow} width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.29289 8.20711C7.68342 8.59763 8.31658 8.59763 8.70711 8.20711L15.0711 1.84315C15.4616 1.45262 15.4616 0.819457 15.0711 0.428932C14.6805 0.0384081 14.0474 0.0384081 13.6569 0.428932L8 6.08579L2.34315 0.428932C1.95262 0.0384075 1.31946 0.0384075 0.928932 0.428932C0.538408 0.819456 0.538408 1.45262 0.928932 1.84315L7.29289 8.20711ZM7 6.5L7 7.5L9 7.5L9 6.5L7 6.5Z" fill="#2F9BFF"/>
                    </svg>
                </section>
                <p>{label}</p>
            </section>
            <section ref={refContainer} className={classes.container + (' open_filter')}>
                {children}
            </section>
        </section>
    )
}