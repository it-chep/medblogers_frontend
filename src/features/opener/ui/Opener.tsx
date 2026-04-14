"use client"

import { FC, ReactNode, RefObject, useCallback, useEffect, useRef } from "react";
import classes from './opener.module.scss'
import { createPortal } from "react-dom";

interface IProps {
    icon: ReactNode;
    elem: ReactNode;
    setOpen: (open: boolean) => void;
    open: boolean;
    isLight?: boolean;
    ref?: RefObject<HTMLDivElement | null>
}

export const Opener: FC<IProps> = ({icon, elem, setOpen, open, isLight, ref}) => {

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
        }
    }, [])

    return (
        <section className={classes.wrapper}>
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
                ref
                    ?                     
                ref.current?.parentElement
                    &&
                createPortal(
                    <section 
                        ref={refHint}
                        className={classes.hint  + (isLight ? ` ${classes.light}` : '')} 
                    >
                        {elem}
                    </section>,
                    ref.current?.parentElement
                )
                    :
                <section 
                    ref={refHint}
                    className={classes.hint  + (isLight ? ` ${classes.light}` : '')} 
                >
                    {elem}
                </section>
            }
        </section>
    )
}
