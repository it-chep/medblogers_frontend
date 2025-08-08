"use client"

import { FC, useEffect, useState } from "react";
import classes from './openMenu.module.scss'
import Image from "next/image";
import burgerImg from '../../lib/assets/burger.png'
import { MyModal } from "@/src/shared/ui/myModal";
import { Menu } from "../menu/Menu";
import { Close } from "@/src/shared/ui/close/Close";

interface IProps {
    mobile?: boolean;
}

export const OpenMenu: FC<IProps> = ({mobile}) => {

    const [open, setOpen] = useState<boolean>(false)

    const onClick = () => setOpen(true)

    useEffect(() => {
        if(mobile){
            if(open){
                document.body.style.overflow = 'hidden'
            }
            else{
                document.body.style.overflow = ''
            }
    
            return () => {
                document.body.style.overflow = ''
            }
        }
    }, [open])


    return (
        <>
            <section onClick={onClick} className={classes.openMenu}>
                <Image 
                    alt="burger"
                    width={25} 
                    height={25} 
                    src={burgerImg.src} 
                />
            </section>
            <MyModal 
                transitionSec={.3} 
                open={open} 
                setOpen={setOpen}
            >
                <Menu open={open}>
                    <Close setOpen={setOpen} />
                </Menu>
            </MyModal>
        </>
    )
}