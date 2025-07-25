import { FC } from "react";
import classes from './openMenu.module.scss'
import Image from "next/image";
import burgerImg from '../lib/assets/burger.png'

export const OpenMenu: FC = () => {


    return (
        <section className={classes.openMenu}>
            <Image alt="burger" width={20} height={20} src={burgerImg.src} />
        </section>
    )
}