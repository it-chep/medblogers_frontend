"use client"

import { FC, useState } from "react";
import classes from './openMenu.module.scss'
import Image from "next/image";
import burgerImg from '../../lib/assets/burger.png'
import { MyModal } from "@/src/shared/ui/myModal";
import { Menu } from "../menu/Menu";
import { CloseMenu } from "../close/CloseMenu";



export const OpenMenu: FC = () => {

    const [open, setOpen] = useState<boolean>(false)

    const onClick = () => setOpen(true)

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
                    <CloseMenu setOpen={setOpen} />
                </Menu>
            </MyModal>
        </>
    )
}