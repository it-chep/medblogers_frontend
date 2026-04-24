"use client"

import { FC, PropsWithChildren } from "react";
import classes from './mobile.module.scss'
import Image from "next/image";
import logo from '@/src/shared/lib/assets/medblogers_logo.png'
import { OpenMenu } from "@/src/features/menu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { TitleWrap } from "../title/TitleWrap";
import { HomeNav } from "../homeNav/HomeNav";
import { FixedMenuMobile } from "../fixedMenuMobile/FixedMenuMobile";
import { ShowContentSmoothly } from "@/src/features/ShowContentSmoothly";

const ALLOWED_PATHS = ['/', '/helpers']

export const MobileHeader: FC<PropsWithChildren> = ({children}) => {

    const pathname = usePathname()

    return (
        <>
            <section className={classes.container}>
                <section className={classes.top}>
                    <Link href={'/'}>
                        <Image src={logo.src} width={232} height={60} alt="логотип" />
                    </Link>
                    <section className={classes.menu}>
                        <OpenMenu mobile={true} />
                    </section>
                </section>
                <section className={classes.titleMobile}>
                    <TitleWrap pathname={pathname || ""} />
                </section>
                {
                    (ALLOWED_PATHS.includes(pathname))
                        &&
                    <section className={classes.home}>
                        {
                            (pathname === '/')
                                &&
                            <section className={classes.statistics}> 
                                {children}
                            </section>
                        }
                        <HomeNav />
                    </section>
                }
            </section>
            <ShowContentSmoothly
                speed_ms={250}
                mobile
            >
                <FixedMenuMobile >
                    <OpenMenu mobile={true} />
                </FixedMenuMobile>
            </ShowContentSmoothly>
        </>
    )
}