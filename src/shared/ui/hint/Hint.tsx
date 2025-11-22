"use client"

import { FC, MouseEvent, PropsWithChildren, ReactNode, useEffect, useRef, useState } from "react";
import classes from './hint.module.scss'

interface IProps {
    hint: string | ReactNode;
    width?: number;
}

const HINT_WIDTH = 240;

export const Hint: FC<IProps & PropsWithChildren> = ({hint, width: hintWidth = HINT_WIDTH, children}) => {

    const [open, setOpen] = useState<boolean>(false)
    const hintRef = useRef<HTMLDivElement>(null)
    const containerRef = useRef<HTMLDivElement>(null)

    function onClose(e: Event) {
        const target = e.target as HTMLElement
        if(!target.closest(`.${classes.container}`) && !target.closest(`.${classes.hint}`)){
            setOpen(false)
            document.body.removeEventListener('click', onClose)
        }
    }

    const checkPosAndSize = () => {
         if(hintRef.current && containerRef.current){
            const containerData = containerRef.current.getBoundingClientRect()
            const right = window.innerWidth - (containerData.left + 20);
            const left = containerData.right - hintWidth - 20;
            hintRef.current.style.width = hintWidth + 'px'
           
            if(right < hintWidth){
                hintRef.current.style.right = '0';
                hintRef.current.style.left = 'auto';
                if(left < 0){
                    hintRef.current.style.width = hintWidth + left + 'px';
                }
            }
            else {
                hintRef.current.style.left = '0';
                hintRef.current.style.right = 'auto';
            }
        }
    }

    const onClick = () => {
        if(hintRef.current && containerRef.current){
            setOpen(true)
            checkPosAndSize()
            document.addEventListener('click', onClose)
        }
    }

    const onEnter = () => {
        setOpen(true)
        checkPosAndSize()
    }

    const onLeave = (e: MouseEvent<HTMLElement | SVGElement>) => {
        const target = e.target as HTMLElement
        if(target.closest(`.${classes.container}`)){
            setOpen(false)
            document.body.removeEventListener('click', onClose)
        }
    }

    useEffect(() => {
        window.addEventListener('resize', checkPosAndSize)

        return () => window.removeEventListener('resize', checkPosAndSize)
    }, [])

    return (
        <section 
            onMouseLeave={onLeave} 
            ref={containerRef} 
            className={classes.container}
        >
            {
                children 
                    ?
                <section onMouseEnter={onEnter} onClick={onClick} className={classes.content}>
                    {children}
                </section>
                    :
                <svg onMouseEnter={onEnter} onClick={onClick} className={classes.question} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 24C16.8284 24 17.5 23.3284 17.5 22.5C17.5 21.6716 16.8284 21 16 21C15.1716 21 14.5 21.6716 14.5 22.5C14.5 23.3284 15.1716 24 16 24Z" />
                    <path d="M16 18V17C16.6922 17 17.3689 16.7947 17.9445 16.4101C18.5201 16.0256 18.9687 15.4789 19.2336 14.8394C19.4985 14.1999 19.5678 13.4961 19.4327 12.8172C19.2977 12.1383 18.9644 11.5146 18.4749 11.0251C17.9854 10.5356 17.3617 10.2023 16.6828 10.0673C16.0039 9.9322 15.3001 10.0015 14.6606 10.2664C14.0211 10.5313 13.4744 10.9799 13.0899 11.5555C12.7053 12.1311 12.5 12.8078 12.5 13.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            }
            <section className={classes.hr}></section>
            <section 
                ref={hintRef} 
                style={{width: hintWidth}}
                className={classes.hint + (open ? ` ${classes.open}` : '')}
            >
                {hint}
            </section>
        </section>
    )
}