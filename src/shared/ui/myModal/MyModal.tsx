"use client"

import { FC, PropsWithChildren, useEffect, useRef } from "react";
import classes from './myModal.module.scss'

interface IProps {
    open: boolean;
    setOpen: (open: boolean) => void;

}

export const MyModal: FC<IProps & PropsWithChildren> = ({open, setOpen, children}) => {

    const refWrap = useRef<HTMLDivElement>(null)

    const close = () => {
        setOpen(false)
    }

    useEffect(() => {
        if(refWrap.current){
            if(open){
                refWrap.current.classList.add(classes.open)
            }
            else{
                refWrap.current.classList.remove(classes.open)
            }
        }
    }, [open])

    return (
        <section ref={refWrap} className={classes.wrapper}>
            <section className={classes.darken} onClick={close}></section>
            <section className={classes.container}>
                {children}
            </section>
        </section>
    )
}