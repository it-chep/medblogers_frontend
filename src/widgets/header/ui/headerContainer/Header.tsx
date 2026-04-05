"use client"

import { FC, PropsWithChildren } from "react";
import classes from './header.module.scss'
import { noPages } from "../../lib/const/noPages";
import { usePathname } from "next/navigation";
import { MobileHeader } from "../mobile/MobileHeader";
import { DesktopMenu } from "../desktopMenu/DesktopMenu";

export const Header: FC<PropsWithChildren> = ({children}) => {

    const pathname = usePathname()

    if(pathname && noPages.includes(pathname)){
        return (
            <></>
        )
    }

    return (
        <header className={classes.header}>
            <section className={classes.desk}>
                <DesktopMenu />
            </section>
            <section className={classes.mobile}>
                <MobileHeader>
                    {children}
                </MobileHeader>
            </section>
        </header>
    )
}