import { FC } from "react";
import classes from './header.module.scss'
import Image from "next/image";
import logo from '../../lib/assets/medblogers_logo.png'
import { Title } from "../title/Title";
import { OpenMenu } from "@/src/features/menu";


export const Header: FC = () => {


    return (
        <header className="wrapper_main">
            <section className={classes.header}>
                <Image src={logo.src} width={268} height={75} alt="логотип" />
                <Title />
                <OpenMenu />
            </section>
        </header>
    )
}