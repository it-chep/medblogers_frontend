import { FC } from "react";
import classes from './header.module.scss'
import Image from "next/image";
import logo from '../../lib/assets/medblogers_logo.png'
import { Title } from "../title/Title";
import { OpenMenu } from "@/src/features/menu";
import Link from "next/link";


export const Header: FC = () => {


    return (
        <header className="wrapper_main">
            <section className={classes.header}>
                <Link href={'/'}>
                    <Image src={logo.src} width={268} height={75} alt="логотип" />
                </Link>
                <Title />
                <OpenMenu />
            </section>
        </header>
    )
}