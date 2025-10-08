"use client"

import { FC, PropsWithChildren, useState } from "react";
import classes from './otherSocialMedia.module.scss'
import internet_logo from '@/src/shared/lib/assets/internet.svg'
import Image from "next/image";

export const OtherSocialMediaDropdown: FC<PropsWithChildren> = ({children}) => {

    const [open, setOpen] = useState<boolean>(false)

    const onClick = () => {
        setOpen(!open)
    }

    return (
        children
            ?
        <section className={classes.container + (open ? ` ${classes.open}` : '')}>
            <section 
                onClick={onClick} 
                className={classes.header}
                onMouseDown={e => e.preventDefault()}
            >
                <Image src={internet_logo} alt="Соцсеть" height={30} width={30} />
                Другие соц сети
                <svg width="15" height="9" viewBox="0 0 15 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 8L7.5 2L1 8" stroke="#ABABAB" stroke-width="2" stroke-linecap="round"/>
                </svg>
            </section>
            <section className={classes.content}>
                {children}
            </section>
        </section>
            :
        <></>
    )
}