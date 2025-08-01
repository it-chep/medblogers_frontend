"use client"

import { FC, PropsWithChildren, useEffect, useRef } from "react";
import classes from './menu.module.scss'
import { menuLinks } from "../../lib/const";


interface IProps {
    open: boolean;
}

export const Menu: FC<IProps & PropsWithChildren> = ({open, children}) => {

    const refMenu = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if(refMenu.current){
            if(open){
                refMenu.current.classList.add(classes.show)
            }
            else{
                refMenu.current.classList.remove(classes.show)
            }
        }
    }, [open])

    return (
        <nav ref={refMenu} className={classes.menu}>
            <section className={classes.header}>
                <span>Меню</span>
                {children}
            </section>
            <ul>
                {menuLinks.map((menuLink, ind) => 
                    <li key={ind}>
                        <a href={menuLink.link}>{menuLink.name}</a>
                    </li>
                )}
            </ul>
        </nav>
    )
}