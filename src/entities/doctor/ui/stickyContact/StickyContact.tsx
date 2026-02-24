"use client"

import { FC, useCallback, useEffect, useState } from "react";
import classes from './stickyContact.module.scss'
import { MyButton } from "@/src/shared/ui/myButton";

interface IProps {
    name: string;
    specialties: string;
    tg: string;
}


export const StickyContact: FC<IProps> = ({name, specialties, tg}) => {

    const [hidden, setHidden] = useState<boolean>(true)

    const onScroll = useCallback(() => {
        if(window.scrollY > window.innerHeight){
            setHidden(false)
        }
        else{
            setHidden(true)
        }
    }, [])

    useEffect(() => {
        window.addEventListener('scroll', onScroll)
        onScroll()

        return () => {
            window.removeEventListener('scroll', onScroll)
        }
    }, [])

    return (
        <section className={classes.container + (!hidden ? ` ${classes.hidden}` : '')}>
            <section className={classes.name}>
                {name}
            </section>
            <section className={classes.specialties}>
                {specialties}
            </section>
            <section className={classes.button}>
                <a 
                    href={tg}
                    target="_blank"
                    className={classes.link}
                >
                    <MyButton>
                        Написать в Telegram
                    </MyButton>
                </a>
            </section>
        </section>
    )
}