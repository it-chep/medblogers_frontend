"use client"

import { FC, PropsWithChildren, useRef, useState } from "react";
import classes from './otherSocialMedia.module.scss'
import internet_logo from '@/src/shared/lib/assets/internet.svg'
import Image from "next/image";

export const OtherSocialMediaDropdown: FC<PropsWithChildren> = ({children}) => {

    const [open, setOpen] = useState<boolean>(false)
    const containerRef = useRef<HTMLDivElement>(null)

    const onClick = () => {
        const newOpen = !open;
        setOpen(newOpen)
        if(containerRef.current){
            if(newOpen){
                containerRef.current.style.height = containerRef.current.scrollHeight + 'px';
            }
            else{
                containerRef.current.style.height = '50px'
            }
        }
    }


    return (
        children
            ?
        <section 
            ref={containerRef}
            className={classes.container + (open ? ` ${classes.open}` : '')}
        >
            <section 
                onClick={onClick} 
                className={classes.header}
                onMouseDown={e => e.preventDefault()}
            >
                <Image src={internet_logo} alt="Соцсеть" height={30} width={30} />
                Другие соц сети
                <svg width="15" height="9" viewBox="0 0 15 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 8L7.5 2L1 8" stroke="#ABABAB" strokeWidth="2" strokeLinecap="round"/>
                </svg>
            </section>
            {children}
        </section>
            :
        <></>
    )
}