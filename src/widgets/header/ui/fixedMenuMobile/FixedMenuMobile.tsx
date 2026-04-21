import { FC, PropsWithChildren, useCallback, useEffect, useRef } from "react";
import classes from './fixedMenuMobile.module.scss'
import { LogoMiniSvg } from "../../lib/assets/LogoSvg";


export const FixedMenuMobile: FC<PropsWithChildren> = ({children}) => {


    return (
        <section className={classes.container}>
            <LogoMiniSvg />
            <section className={classes.title}>
                ЕДИНАЯ БАЗА ВРАЧЕЙ-БЛОГЕРОВ
            </section>
            <section>
                {children}
            </section>
        </section>
    )
}