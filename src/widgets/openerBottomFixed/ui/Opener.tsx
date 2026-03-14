"use client"

import { FC, ReactNode, useCallback, useEffect, useRef, useState } from "react";
import classes from './opener.module.scss'

interface IProps {
    blocks: {
        icon: ReactNode;
        elem: ReactNode;
    }[];
    setOpen: (open: boolean) => void;
    open: boolean;
}

export const Opener: FC<IProps> = ({blocks, setOpen, open}) => {

    const [selected, setSelected] = useState<number>(0)

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
        <section className={classes.wrapper}>
            <section 
                className={classes.container} 
                onClick={() => setOpen(!open)}
                onMouseDown={e => e.preventDefault()}
                ref={refContainer}
            >
                {blocks.map((block, ind) => 
                    <section 
                        key={ind}
                        className={classes.icon}
                    >
                        {block.icon}
                    </section>
                )}
            </section>
            {
                open
                    &&
                <section 
                    ref={refHint}
                    className={classes.hint} 
                >
                    {blocks[selected].elem}
                </section>
            }
        </section>
    )
}