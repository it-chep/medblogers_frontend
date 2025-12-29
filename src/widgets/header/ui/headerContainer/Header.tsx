"use client"

import { FC } from "react";
import classes from './header.module.scss'
import Image from "next/image";
import logo from '@/src/shared/lib/assets/medblogers_logo.png'
import { OpenMenu } from "@/src/features/menu";
import Link from "next/link";
import { noPages } from "../../lib/const/noPages";
import { usePathname } from "next/navigation";
import { TitleWrap } from "../title/TitleWrap";

export const Header: FC = () => {

    const pathname = usePathname()

    if(pathname && noPages.includes(pathname)){
        return (
            <></>
        )
    }

    return (
        <header className="wrapper_main">
            <section className={classes.header}>
                <section className={classes.top}>
                    <Link href={'/'}>
                        <Image src={logo.src} width={268} height={75} alt="логотип" />
                    </Link>
                    <section className={classes.openMenuMobile}>
                        <OpenMenu mobile={true} />
                    </section>
                </section>
                    <TitleWrap pathname={pathname || ""} />
                <section className={classes.openMenuDesc}>
                    <OpenMenu />
                </section>
            </section>
        </header>
    )
}