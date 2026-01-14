"use client"

import { FC, PropsWithChildren, useEffect, useRef } from "react";
import classes from './myModal.module.scss'

interface IProps {
    open: boolean;
    setOpen: (open: boolean) => void;
    transitionSec?: number; // seconds
    glass?: boolean;
}

export const MyModal: FC<IProps & PropsWithChildren> = ({open, setOpen, transitionSec, glass, children}) => {

    const refWrap = useRef<HTMLDivElement>(null)
    const refDarken = useRef<HTMLDivElement>(null)

    const close = () => {
        setOpen(false)
    }

    useEffect(() => {
        if(refWrap.current && refDarken.current){
            if(open){
                refWrap.current.classList.add(classes.open)
                refDarken.current.classList.add(classes.open)
            }
            else{
                refWrap.current.classList.remove(classes.open)
                refDarken.current.classList.remove(classes.open)
            }
        }
    }, [open])

    const isOne = useRef<boolean>(true)
    useEffect(() => {
        if(isOne.current){
            isOne.current = false;
            return
        }
        if(transitionSec){
         
            let currentOpacity = open ? 0 : 1;

            function animateOpacity() {
                if(transitionSec && refWrap.current && refDarken.current){
                    refWrap.current.style.opacity = String(currentOpacity);
                    refDarken.current.style.opacity = String(currentOpacity);

                    if(open && currentOpacity >= 1){
                        refWrap.current.style.opacity = '1';
                        refDarken.current.style.opacity = '1';
                        return
                    }
    
                    if(!open && currentOpacity <= 0){
                        refWrap.current.style.opacity = '0';
                        refWrap.current.style.display = 'none'
                        refDarken.current.style.opacity = '0';
                        refDarken.current.style.display = 'none'
                        return
                    }
    
                    currentOpacity = open ? currentOpacity + 0.025 : currentOpacity - 0.025;
                    setTimeout(animateOpacity, transitionSec * 1000 / 40)
                }

            }

            if(open){
                refWrap.current!.style.display = 'block'
                refDarken.current!.style.display = 'block'
            }
            animateOpacity()
        }
        else if(refWrap.current && refDarken.current){
            if(open){
                refWrap.current.style.display = 'block'
                refDarken.current.style.display = 'block'
            }
            else{
                refWrap.current.style.display = 'none'
                refDarken.current.style.display = 'none'
            }
        }
    }, [open])

    return (
    <>
        <section 
            style={{display: 'none'}}
            ref={refDarken} 
            className={classes.darken + (glass ? ` ${classes.glass}` : '')} 
            onClick={close}
        />
        <section style={{display: 'none'}} ref={refWrap} className={classes.wrapper}>
            <section className={classes.container}>
                {children}
            </section>
        </section>
    </>
    )
}