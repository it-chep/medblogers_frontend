"use client"

import { FC, PointerEvent as PointerEventReact, PropsWithChildren, useEffect, useRef, useState } from "react";
import classes from './curtain.module.scss'


interface IProps {
    onCloseWrap?: () => void;
    openWrap?: boolean;
    initClose?: boolean;
}

const SPEED_DRAG = 'all .1s ease';
const SPEED_OPEN_CLOSE = 'all .4s ease-out';

export const Curtain: FC<IProps & PropsWithChildren> = ({onCloseWrap, initClose, openWrap, children}) => {

    const [wrapperHeight, setWrapperHeight] = useState<number>(0)
    const refwrapper = useRef<HTMLUListElement>(null)
    const refWrapperHeight = useRef<number>(0)

    useEffect(() => {
        refWrapperHeight.current = wrapperHeight;
    }, [wrapperHeight])

    const onOpen = () => {
        if(refwrapper.current){
            refwrapper.current.style.bottom = `0px`;
        }
    }
    
    const onClose = () => {
        if(refwrapper.current){
            refwrapper.current.style.bottom = `-${refWrapperHeight.current}px`;
        }
        onCloseWrap && onCloseWrap()
    }

    useEffect(() => {
        if(wrapperHeight){
            if(openWrap){
                onOpen()
            }
            else{
                onClose()
            }
        }
    }, [openWrap])


    const onStart = (e: PointerEventReact) => {
        if(refwrapper.current) {
            e.preventDefault()
            
            const bottomShiftList = refwrapper.current.getBoundingClientRect().height - (window.innerHeight - e.clientY);
            let prevBottomList = bottomShiftList;

            refwrapper.current.style.transition = SPEED_DRAG;

            const onPointerMove = (e: PointerEvent) => {
                e.preventDefault()
                if(refwrapper.current) {
                    const clientBottom = window.innerHeight - e.clientY;
                    let newBottomList = wrapperHeight - clientBottom - bottomShiftList;
                    if(newBottomList < 0) {
                        newBottomList = 0;
                    }
                    setTimeout(() => {prevBottomList = newBottomList}, 30)
                    let newBottom = `-${newBottomList}px`;
                    refwrapper.current.style.bottom = newBottom;
                }
            }

            const onPointerUp = (e: PointerEvent) => {
                e.preventDefault()
                if(refwrapper.current) {
                    const clientBottom = window.innerHeight - e.clientY;
                    const newBottomList = wrapperHeight - clientBottom - bottomShiftList;
                    refwrapper.current.style.transition = SPEED_OPEN_CLOSE;
                    if(prevBottomList >= newBottomList){  // open
                        onOpen()
                    }
                    else{
                        onClose()
                    }
                    
                    window.removeEventListener('pointermove', onPointerMove)
                    window.removeEventListener('pointerup', onPointerUp)
                }
            }

            window.addEventListener('pointermove', onPointerMove)
            window.addEventListener('pointerup', onPointerUp)
        }
    }

    useEffect(() => {
        if(refwrapper.current){
            const height = refwrapper.current.getBoundingClientRect().height;
            refwrapper.current.style.transition = SPEED_OPEN_CLOSE;
            if(initClose){
                refwrapper.current.style.bottom = `-${height}px`;
            }
            setWrapperHeight(height)
        }
    }, [])

    useEffect(() => {
        const onResize = () => {
            if(refwrapper.current){
                const height = refwrapper.current.getBoundingClientRect().height;
                setWrapperHeight(height)
            }
        }

        window.addEventListener('resize', onResize)

        return () => {
            onResize()
            window.removeEventListener('resize', onResize)
        }
    }, [])

    return (
        <section 
            className={classes.wrapper}
            style={{
                bottom: initClose ? '-545px' : '0px'
            }}
            ref={refwrapper}
        >
            <section 
                onPointerDown={onStart}
                onDragStart={e => e.preventDefault()}
                onDragLeave={e => e.preventDefault()}
                className={classes.dragClose} 
            />
            <section className={classes.content}>
                {children}                
            </section>
        </section>
    )
}