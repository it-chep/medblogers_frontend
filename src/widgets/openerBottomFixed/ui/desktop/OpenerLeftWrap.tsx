"use client"

import { SwitchTheme, useBlogTheme } from "@/src/features/switchTheme";
import { FC, useState } from "react";
import classes from './openerLeftWrap.module.scss'
import { Opener } from "@/src/features/opener";

export const OpenerLeftWrap: FC = () => {

    const { isLight } = useBlogTheme();

    const [open, setOpen] = useState<boolean>(false)

    return (
        <section className={classes.container}>
            <Opener
                positionLeft
                open={open}
                setOpen={setOpen}
                isLight={isLight}
                icon={(isLight
                        ?
                    <svg className={classes.sun} width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.9869 12.4864C19.8932 14.2225 19.2986 15.8944 18.275 17.2998C17.2514 18.7052 15.8426 19.7841 14.2189 20.4059C12.5953 21.0278 10.8262 21.166 9.12569 20.8039C7.42514 20.4418 5.86587 19.5949 4.63638 18.3656C3.40688 17.1362 2.5598 15.577 2.19753 13.8765C1.83526 12.176 1.97331 10.4069 2.59499 8.78322C3.21668 7.15948 4.29537 5.75059 5.70069 4.72683C7.10601 3.70308 8.77778 3.1083 10.5139 3.0144C10.9189 2.9924 11.1309 3.4744 10.9159 3.8174C10.1968 4.96795 9.88889 6.32827 10.0424 7.67635C10.1959 9.02443 10.8018 10.2807 11.7612 11.2401C12.7206 12.1995 13.9769 12.8054 15.325 12.9589C16.673 13.1124 18.0334 12.8045 19.1839 12.0854C19.5279 11.8704 20.0089 12.0814 19.9869 12.4864Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                        :
                    <svg className={classes.moon} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 3V4M12 20V21M3 12H4M20 12H21M18.364 5.636L17.657 6.343M6.343 17.657L5.636 18.364M5.636 5.636L6.343 6.343M17.657 17.657L18.364 18.364M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                )}
                elem={<SwitchTheme setOpen={setOpen} />}
            />
            
        </section>
    )
}