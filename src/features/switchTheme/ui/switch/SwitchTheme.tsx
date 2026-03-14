"use client"

import { FC, useCallback, useEffect, useRef, useState } from "react";
import classes from './switchTheme.module.scss'
import { MyCheckbox } from "@/src/shared/ui/myCheckbox";
import { useBlogTheme } from "../../lib/hooks/useBlogTheme";

interface IProps {
    setOpen: (open: boolean) => void;
}

export const SwitchTheme: FC<IProps> = ({setOpen}) => {

    const { isLight, setLight, setDark } = useBlogTheme();

    const onLight = () => {
        const target = document.querySelector('.blog')
        if(target){
            setLight()
            localStorage.setItem('theme', 'light')
            document.cookie = `theme=light; path=/; max-age=31536000`;
            target.classList.add('light')
            setOpen(false)
        }
    }
    
    const onDark = () => {
        const target = document.querySelector('.blog')
        if(target){
            setDark()
            localStorage.setItem('theme', 'dark')
            document.cookie = `theme=dark; path=/; max-age=31536000`;
            target.classList.remove('light')
            setOpen(false)
        }
    }

    useEffect(() => {
        return () => {
            localStorage.removeItem('theme')
        }
    }, [])

    return (
        <section className={classes.wrapper + (isLight ? ` ${classes.light}` : '')}>
            <section className={classes.sign}>Тема оформления</section>
            <ul className={classes.list}>
                <li 
                    onClick={onLight} 
                    className={classes.item + " " + classes.light + (isLight ? ` ${classes.selected}` : '')}
                >
                    Светлая {isLight && <MyCheckbox checked />}
                </li>
                <li 
                    onClick={onDark} 
                    className={classes.item + " " + classes.dark  + (!isLight ? ` ${classes.selected}` : '')}
                >
                    Темная {!isLight && <MyCheckbox checked />}
                </li>
            </ul>
        </section>
    )
}