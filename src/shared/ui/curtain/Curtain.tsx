"use client"

import { FC, PointerEvent as PointerEventReact, PropsWithChildren, useCallback, useEffect, useRef, useState } from "react";
import classes from './curtain.module.scss'


interface IProps {
    onCloseWrap?: () => void;
    openWrap?: boolean;
    initClose?: boolean;
    backgroundColor: string;
}

const SPEED_DRAG = 'all .1s ease';
const SPEED_OPEN_CLOSE = 'all .4s ease-out';

export const Curtain: FC<IProps & PropsWithChildren> = ({backgroundColor, onCloseWrap, initClose, openWrap, children}) => {

    const [wrapperHeight, setWrapperHeight] = useState<number>(0)
    const refwrapper = useRef<HTMLUListElement>(null)
    const refWrapperHeight = useRef<number>(0)
    const rafRef = useRef<number>(0);

    useEffect(() => {
        refWrapperHeight.current = wrapperHeight;
    }, [wrapperHeight])

    const onOpen = () => {
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
        if(refwrapper.current){
            refwrapper.current.style.transform = `translateY(0)`;
        }
    }
    
    const onClose = () => {
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
        if(refwrapper.current){
            refwrapper.current.style.transform = `translateY(100%)`;
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
    }, [openWrap, wrapperHeight])

    const onStart = (e: PointerEventReact) => {
        if(refwrapper.current) {
            e.preventDefault()
            
            const startBottomShift = refwrapper.current.getBoundingClientRect().height - (window.innerHeight - e.clientY);

            let prevBottomList = e.clientY;

            refwrapper.current.style.transition = SPEED_DRAG;

            const onPointerMove = (e: PointerEvent) => {
            e.preventDefault();
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
            rafRef.current = requestAnimationFrame(() => {
                if (refwrapper.current) {
                    const clientBottom = window.innerHeight - e.clientY;
                    let newTranslateY = wrapperHeight - clientBottom - startBottomShift;
                    setTimeout(() => {
                        prevBottomList = e.clientY
                    }, 30)
                    if(newTranslateY < 0){
                        newTranslateY = 0;
                    }
                    refwrapper.current.style.transform = `translateY(${newTranslateY}px)`;
                }
            });
            };

            const onPointerUp = (e: PointerEvent) => {
                e.preventDefault()
                if(refwrapper.current) {
                    const newBottomList = e.clientY;
                    refwrapper.current.style.transition = SPEED_OPEN_CLOSE;
                    
                    if((prevBottomList) >= newBottomList){  // open
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

    const initWrapperHeight = useCallback(() => {
        if(refwrapper.current){
            const height = refwrapper.current.getBoundingClientRect().height;
            refwrapper.current.style.transition = SPEED_OPEN_CLOSE;
            if(initClose){
                refwrapper.current.style.transform = `translateY(${height}px)`;
            }
            setWrapperHeight(height)
        }
    }, [])

    useEffect(() => {
        initWrapperHeight()
    }, [])

    useEffect(() => {
        const onResize = () => {
            if(refwrapper.current){
                const height = refwrapper.current.getBoundingClientRect().height;
                setWrapperHeight(height)
            }
        }

        window.addEventListener('resize', onResize)

        if(refwrapper.current){
            const resize = new ResizeObserver((callback: ResizeObserverEntry[]) => {
                initWrapperHeight()
            })
    
            resize.observe(refwrapper.current)
        }
        

        return () => {
            onResize()
            window.removeEventListener('resize', onResize)
        }
    }, [])

    return (
        <section 
            className={classes.wrapper}
            style={{
                transform: initClose ? 'translateY(100%)' : 'translateY(0)',
                backgroundColor
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