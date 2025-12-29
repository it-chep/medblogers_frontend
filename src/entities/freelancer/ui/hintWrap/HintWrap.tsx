"use client"

import { FC, PropsWithChildren, useRef, useState } from "react";
import classes from './hintWrap.module.scss'
import { createPortal } from "react-dom";
import { Hint } from "@/src/shared/ui/hint";


interface IProps {
    hint: string;
    width: number;
}

export const HintWrap: FC<IProps & PropsWithChildren> = ({hint, width, children}) => {

    const refWrap = useRef<HTMLSpanElement>(null)
    const [open, setOpen] = useState<boolean>(false)

    return (
        <>
        <span
            className={classes.wrap}
            ref={refWrap}
            onClick={e => 
                e.preventDefault()
            } 
        >
            <span 
                onClick={e => {
                    e.preventDefault()
                }} 
            >
                <Hint 
                    setOpenWrap={setOpen} 
                    width={width} 
                    hint={hint}
                >
                    {children}
                </Hint>
            </span>
        </span>
        {
            open
                &&
            createPortal(
                <section 
                    onClick={e => 
                        e.preventDefault()
                    } 
                    className={classes.abs} 
                />,
                refWrap.current?.closest('a') || document.body
            )
        }    
        </>   
    )
}