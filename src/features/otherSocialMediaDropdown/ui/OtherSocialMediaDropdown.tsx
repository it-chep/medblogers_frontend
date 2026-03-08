"use client"

import { FC, PropsWithChildren, useRef, useState } from "react";
import classes from './otherSocialMedia.module.scss'
import otherSocial from '@/src/shared/lib/assets/otherSocial.svg'
import Image from "next/image";

interface IProps {
    isVip?: boolean;
}

export const OtherSocialMediaDropdown: FC<IProps & PropsWithChildren> = ({isVip, children}) => {

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
            className={classes.container + (open ? ` ${classes.open}` : '') + (isVip ? ` ${classes.vip}` : '')}
        >
            <section 
                onClick={onClick} 
                className={classes.header}
                onMouseDown={e => e.preventDefault()}
            >
                <Image src={otherSocial} alt="Соцсеть" height={30} width={30} />
                Другие соц сети
                <svg width="15" height="9" viewBox="0 0 15 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 8L7.5 2L1 8" strokeWidth="2" strokeLinecap="round"/>
                </svg>
            </section>
            {children}
        </section>
            :
        <></>
    )
}