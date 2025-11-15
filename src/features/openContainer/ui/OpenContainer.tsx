"use client"

import { FC, PropsWithChildren, useRef, useState } from "react";
import classes from './openContainer.module.scss'
import { MyButton } from "@/src/shared/ui/myButton";

interface IProps {
    heightConst: number;
    darkenHeightConst: number;
    speedSec: number;
}

export const OpenContainer: FC<IProps & PropsWithChildren> = (
    {heightConst, darkenHeightConst, speedSec: speed = 0.3, children}
) => {

    const [open, setOpen] = useState<boolean>(false)
    const contentRef = useRef<HTMLDivElement>(null)
    const darkenRef = useRef<HTMLDivElement>(null)

    const onClick = () => {
        const newOpen = !open;
        if(contentRef.current && darkenRef.current){
            if(newOpen){
                const height = contentRef.current.scrollHeight;
                contentRef.current.style.height = height + 5 + 'px';
                darkenRef.current.style.height = '0px';
                darkenRef.current.style.opacity = '0';
            }
            else{  
                contentRef.current.style.height = heightConst + 'px';
                darkenRef.current.style.height = darkenHeightConst + 'px';
                darkenRef.current.style.opacity = '1';
            }
            setOpen(newOpen)
        }
    }

    return (
        <section className={classes.openPriceList}>
            <section 
                className={classes.content}
                ref={contentRef} 
                style={{height: heightConst + 'px', transition: `all ${speed}s ease`}} 
            >
                {children}
                <section 
                    className={classes.darken}
                    ref={darkenRef} 
                    style={{height: darkenHeightConst + 'px', transition: `all ${speed}s ease`}} 
                />
            </section>
            <section className={classes.button}>
                <MyButton onClick={onClick}>
                    {!open ? 'Посмотреть все' : 'Спрятать' }
                </MyButton>
            </section>
        </section>
    )
}