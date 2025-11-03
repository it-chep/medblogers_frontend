"use client"

import { FC, useEffect, useState } from "react";
import classes from './verifiedCookies.module.scss'
import cookieImg from '../lib/assets/cookie.png'
import Image from "next/image";
import { MyButton } from "@/src/shared/ui/myButton";


export const VerifiedCookies: FC = () => {

    const [verified, setVerified] = useState<boolean>(false);
    const [isMounted, setIsMounted] = useState<boolean>(false);

    useEffect(() => {
        setIsMounted(true);
        const storedValue = localStorage.getItem('verifiedCookies');
        setVerified(Boolean(storedValue));
    }, []);

    const onClick = () => {
        localStorage.setItem('verifiedCookies', 'true');
        setVerified(true);
    }

    if (!isMounted) {
        return null; // или лоадер
    }

    return (
        !verified
            &&
        <section className={classes.container}>
            <Image src={cookieImg.src} width={28} height={32} alt="Cookie" />
            <span>
                Мы используем файлы cookie, шаришь?
            </span>
            <section className={classes.button}>
                <MyButton onClick={onClick}>
                    Ок
                </MyButton>
            </section>
        </section>
    )
}