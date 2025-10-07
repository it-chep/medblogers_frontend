import { FC } from "react";
import classes from './header.module.scss'
import Image from "next/image";
import logo from '../../lib/assets/medblogers_logo.png'
import { Title } from "../title/Title";
import { OpenMenu } from "@/src/features/menu";
import Link from "next/link";
import { headers } from "next/headers";
import { noPages } from "../../lib/const/noPages";

export const Header: FC = async () => {

    const headerList = await headers();
    const pathname = headerList.get("x-current-path");

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
                    <Title pathname={pathname || ""} />
                <section className={classes.openMenuDesc}>
                    <OpenMenu />
                </section>
            </section>
        </header>
    )
}