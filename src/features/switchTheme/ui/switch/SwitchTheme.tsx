"use client"

import { FC } from "react";
import classes from './switchTheme.module.scss'
import { MyCheckbox } from "@/src/shared/ui/myCheckbox";
import { useBlogTheme } from "../../lib/hooks/useBlogTheme";

interface IProps {
    setOpen: (open: boolean) => void;
}

export const SwitchTheme: FC<IProps> = ({setOpen}) => {

    const { isLight, setLight, setDark } = useBlogTheme();

    const onLight = () => {
        setLight()
        setOpen(false)
    }
    
    const onDark = () => {
        setDark()
        setOpen(false)
    }

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