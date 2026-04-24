"use client"

import { FC, useEffect, useRef, useState } from "react";
import classes from './openMenu.module.scss'
import Image from "next/image";
import { MyModal } from "@/src/shared/ui/myModal";
import { Menu } from "../menu/Menu";
import { usePathname } from "next/navigation";

interface IProps {
    mobile?: boolean;
}

export const OpenMenu: FC<IProps> = ({mobile}) => {

    const [open, setOpen] = useState<boolean>(false)
    const openRef = useRef<boolean>(false)

    const onClick = () => setOpen(true)

    const pathname = usePathname()

    useEffect(() => {
        setOpen(false)
    }, [pathname])

    const check = () => {
        if(mobile){
            if(openRef.current){
                document.body.style.overflow = 'hidden'
            }
            else{
                document.body.style.overflow = ''
            }
        }
    }

    useEffect(() => {
        openRef.current = open;
        check()
    }, [open])

    useEffect(() => {
        if(mobile){
            window.addEventListener('resize', check)
        }

        return () => {
            document.body.style.overflow = ''
            window.removeEventListener('resize', check)
        }
    }, [])

    return (
        <>
            <section 
                onClick={onClick} 
                className={classes.openMenu}
            >
                <svg className={classes.burger} width="34" height="20" viewBox="0 0 34 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="34" height="2" rx="1" fill="white"/>
                    <rect y="9" width="34" height="2" rx="1" fill="white"/>
                    <rect y="18" width="34" height="2" rx="1" fill="white"/>
                </svg>
            </section>
            <MyModal 
                transitionSec={.3} 
                open={open} 
                setOpen={setOpen}
                glass
            >
                <section className={classes.close + (mobile ? ` ${classes.mobile}` : '')}>
                    <Menu 
                        open={open} 
                        setOpen={setOpen}
                    />
                </section>
            </MyModal>
        </>
    )
}