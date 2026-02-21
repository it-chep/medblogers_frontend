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

    return (
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
                    width={width} 
                    hint={hint}
                >
                    {children}
                </Hint>
            </span>
        </span>
    )
}