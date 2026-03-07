"use client"

import { FC, PropsWithChildren, useCallback, useEffect, useRef, useState } from "react";
import classes from './showContentSmoothly.module.scss'

interface IProps {
    speed_ms: number;
    mobile: boolean;
}

const INCREMENT = 0.05;

export const ShowContentSmoothly: FC<IProps & PropsWithChildren> = ({speed_ms, mobile, children}) => {

    const [opacity, setOpacity] = useState<number>(0)
    const refDisplay = useRef<'none' | 'block'>('none')
    const [display, setDisplay] = useState<'none' | 'block'>('none')
    const refcurrentShow = useRef<boolean>(false)
    const refcurrentHidden = useRef<boolean>(false)
    
    const [isActive, setIsActive] = useState<boolean>(false)
    const refIsActive = useRef<boolean>(false)
    
    const refOpacity = useRef<number>(0)

    const refIntervalId = useRef<NodeJS.Timeout>(null)

    useEffect(() => {
        refIsActive.current = isActive;
    }, [isActive])
    useEffect(() => {
        refDisplay.current = display;
    }, [display])

    const reset = useCallback(() => {
        refcurrentShow.current = false;
        refcurrentHidden.current = false;
        if(refIntervalId.current){
            clearInterval(refIntervalId.current)
            refIntervalId.current = null;
        }
    }, [])

    const onShow = useCallback(() => {
        reset()
        refcurrentShow.current = true;
        setDisplay('block')

        const end = () => {
            setOpacity(1)
            refOpacity.current = 1;
            reset()
        }

        refIntervalId.current = setInterval(() => {
            const opacityPrev = refOpacity.current
            if(opacityPrev >= 1){
                end()
            }
            else{
                const opacityNew = +(opacityPrev + INCREMENT).toFixed(2) 
                refOpacity.current = opacityNew;
                setOpacity(opacityNew)
            }
        }, speed_ms * INCREMENT)
    }, [])

    const onHidden = useCallback(() => {
        reset()
        refcurrentHidden.current = true;

        const end = () => {
            setDisplay('none')
            setOpacity(0)
            refOpacity.current = 0;
            reset()
        }

        refIntervalId.current = setInterval(() => {
            const opacityPrev = refOpacity.current
            if(opacityPrev <= 0){
                end()
            }
            else{
                const opacityNew = +(opacityPrev - INCREMENT).toFixed(2)
                refOpacity.current = opacityNew;
                setOpacity(opacityNew)
            }
        }, speed_ms * INCREMENT) 
    }, [])

    useEffect(() => {

        const onScroll = () => {
            if(window.scrollY > window.innerHeight){
                if((refDisplay.current === 'none') || (!refcurrentShow.current && refcurrentHidden.current)){
                    onShow()
                }
            }
            else if((refDisplay.current === 'block') || (refcurrentShow.current && !refcurrentHidden.current)){
                onHidden()
            }
        }
        
        const onResize = () => {
            if((mobile && (window.innerWidth > 480))){
                window.removeEventListener('scroll', onScroll)
                setIsActive(false)
            }
            else if(!mobile && (window.innerWidth <= 480)) {
                window.removeEventListener('scroll', onScroll)
                setIsActive(false)
            }
            else if(!refIsActive.current){
                window.addEventListener('scroll', onScroll)
                onScroll()
                setIsActive(true)
            }
        }
        onResize()

        window.addEventListener('resize', onResize)

        return () => {
            window.removeEventListener('scroll', onScroll)
            window.removeEventListener('resize', onResize)
        }
    }, [])

    return (
        <section   
            style={{opacity, display: isActive ? display : 'none'}} 
            className={classes.container}
        >
            {children}
        </section>
    )
}