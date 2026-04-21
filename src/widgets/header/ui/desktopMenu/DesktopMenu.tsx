"use client"

import { FC } from "react";
import classes from './desktopMenu.module.scss'
import Link from "next/link";
import { LogoMiniSvg } from "../../lib/assets/LogoSvg";
import { menuLinks } from "../../lib/const/links";
import { MenuDropdown } from "../menuDropdown/MenuDropdown";
import { usePathname } from "next/navigation";
import { OpenMenu } from "@/src/features/menu";
import logo from '@/src/shared/lib/assets/medblogers_logo.png'
import Image from "next/image";

export const DesktopMenu: FC = () => {

    const pathname = usePathname()

    const inPlace = (link: string) => {
        return link === pathname
    }

    return (
        <section className={classes.container}>
            <section className={classes.desktop}>
                <Link href={'/'}>
                    <LogoMiniSvg />
                </Link>            
                <nav className={classes.nav}>
                    <ul className={classes.list}>
                        {menuLinks.map(link => 
                            <li 
                                key={link.title}
                                className={classes.item + ((link.link && inPlace(link.link)) ? ` ${classes.selected}` : '')}
                            >
                                {
                                    link.subTitles?.length
                                        ?
                                    <MenuDropdown 
                                        title={link.title} 
                                        links={link.subTitles} 
                                    />
                                        :
                                    link.offSite
                                        ?
                                    <a 
                                        href={link.link || "/"}
                                        target="_blank"
                                    >
                                        {link.title}
                                    </a>
                                        :
                                    <Link href={link.link || "/"}>
                                        {link.title}
                                    </Link>
                                }
                            </li>    
                        )}
                        <li className={classes.hr}>c</li>
                    </ul>
                </nav>  
            </section>
            <section className={classes.miniDesktop}>
                <Link href={'/'}>
                    <Image src={logo.src} width={268} height={75} alt="логотип" />
                </Link>
                <section className={classes.menu}>
                    <OpenMenu mobile={true} />
                </section>
            </section>
        </section>
    )
}