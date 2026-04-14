"use client"

import { FC, useEffect, useRef } from "react";
import classes from './menu.module.scss'
import { menuLinks } from "../../lib/const";
import Image from "next/image";
import logo from '@/src/shared/lib/assets/medblogers_logo.png'
import { Close } from "@/src/shared/ui/close/Close";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface IProps {
    open: boolean;
    setOpen: (open: boolean) => void;
}

export const Menu: FC<IProps> = ({open, setOpen}) => {

    const refMenu = useRef<HTMLDivElement>(null)

    const pathname = usePathname()

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

    const checkSeleced = (link: string) => {
        return link === '/' ? pathname === '/' : pathname.includes(link)
    }

    return (
        <nav ref={refMenu} className={classes.menu}>
            <section>
                <section className={classes.header}>
                    <Link href={'/'} className={classes.linkToHome}>
                        <Image src={logo.src} width={190} height={49} alt="Логотип Medblogers" />
                    </Link>
                    <Close setOpen={setOpen} />
                </section>
                <ul className={classes.list}>
                    {menuLinks.map((menuLink, ind) => 
                        <li 
                            key={ind}
                            className={checkSeleced(menuLink.link) ? classes.selected : ''}
                        >
                            {
                                menuLink.site
                                    ?
                                <Link 
                                    scroll={false}
                                    href={menuLink.link}
                                >
                                    {menuLink.name}
                                </Link>
                                    :
                                <a target='_blank' href={menuLink.link}>{menuLink.name}</a>
                            }
                        </li>
                    )}
                </ul>
            </section>
        </nav>
    )
}