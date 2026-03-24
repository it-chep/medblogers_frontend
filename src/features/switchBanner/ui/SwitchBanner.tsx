"use client"

import { FC, useEffect, useRef, useState } from "react";
import classes from './switchBanner.module.scss'
import { ISwitchBannerItem } from "../model/types";
import { SelectedElem } from "./selectedElem/SelectedElem";


interface IProps {
    banners: ISwitchBannerItem[];
}

export const SwitchBanner: FC<IProps> = ({banners}) => {

    const [current, setCurrent] = useState<number>(0)
    const refAutoSwitching = useRef<NodeJS.Timeout>(null)

    const onNext = (button?: boolean) => {
        if(current === banners.length - 1){
            setCurrent(0)
        } 
        else{
            setCurrent(cur => cur + 1)
        }
        if(button){
            deleteAutoSwitching()
            autoSwitching()
        }
    }
    
    const onPrev = (button?: boolean) => {
        if(current === 0){
            setCurrent(banners.length - 1)
        }
        else{
            setCurrent(cur => cur - 1)
        }
        if(button){
            deleteAutoSwitching()
            autoSwitching()
        }
    }

    const autoSwitching = () =>  {
        const id = setInterval(() => {
            setCurrent(prev => prev === banners.length - 1 ? 0 : prev + 1)
        }, 5000)

        refAutoSwitching.current = id;
    }

    const deleteAutoSwitching = () => {
        if(refAutoSwitching.current){
            clearInterval(refAutoSwitching.current)
            refAutoSwitching.current = null;
        }
    }

    useEffect(() => {
        autoSwitching()

        return () => {
            deleteAutoSwitching()
        }
    }, [])
 
    return (    
        <section className={classes.container}>
            <section onClick={() => onPrev(true)} onMouseDown={e => e.preventDefault()} className={classes.prev}>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 26L10 16L20 6" stroke="black" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </section>
            {
                banners.map((banner, ind) => 
                    <section 
                        key={banner.url} 
                        className={classes.currentBanner + (ind === current ? ` ${classes.selected}` : '')}
                    >
                        <SelectedElem elem={banner} />
                    </section>
                )
            }
            <section onClick={() => onNext(true)} onMouseDown={e => e.preventDefault()} className={classes.next}>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 6L22 16L12 26" stroke="black" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </section>
            <section className={classes.nav}>
                {banners.map((item, ind) => 
                    <span key={item.url} className={classes.item + (ind === current ? ` ${classes.selected}` : '')} />
                )}
            </section>
        </section>  
    )
}