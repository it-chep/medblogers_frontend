"use client"

import { FC, ReactNode, useCallback, useEffect, useRef } from "react";
import classes from './opener.module.scss'

interface IProps {
    icon: ReactNode;
    elem: ReactNode;
    setOpen: (open: boolean) => void;
    open: boolean;
    isLight?: boolean;
}

export const Opener: FC<IProps> = ({icon, elem, setOpen, open, isLight}) => {

    const refContainer = useRef<HTMLDivElement>(null)
    const refHint = useRef<HTMLDivElement>(null)
    
    const clickDoc = useCallback((e: MouseEvent) => {
        const target = e.target as Element;
        if(target){
            if(target.closest(`.${classes.wrapper}`)){}  // клик внутри выпадашки
            else{
                e.preventDefault()
                e.stopPropagation()
                setOpen(false)
            }
        }
    }, [])

    useEffect(() => {
        if(open){
            document.body.addEventListener('click', clickDoc)
        }
        else{
            document.body.removeEventListener('click', clickDoc)
        }
    }, [open])

    useEffect(() => {
        return () => {
            document.body.removeEventListener('click', clickDoc)
            localStorage.removeItem('theme')
        }
    }, [])

    return (
        <section className={classes.wrapper + (isLight ? ` ${classes.light}` : '')}>
            <section 
                className={classes.container} 
                onClick={() => setOpen(!open)}
                onMouseDown={e => e.preventDefault()}
                ref={refContainer}
            >
                {icon}
            </section>
            {
                open
                    &&
                <section 
                    ref={refHint}
                    className={classes.hint} 
                >
                    {elem}
                </section>
            }
        </section>
    )
}