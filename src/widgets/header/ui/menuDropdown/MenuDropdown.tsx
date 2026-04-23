"use client"

import { CSSProperties, FC, useLayoutEffect, useRef, useState } from "react";
import classes from './menuDropdown.module.scss'
import Link from "next/link";
import { IMenu } from "../../model/types";
import { usePathname } from "next/navigation";

interface IProps {
    title: string;
    links: IMenu[];
}

const RIGHT_GAP = 20;

export const MenuDropdown: FC<IProps> = ({title, links}) => {

    const pathname = usePathname()
    const [open, setOpen] = useState<boolean>(false)
    const [alignRight, setAlignRight] = useState<boolean>(false)
    const containerRef = useRef<HTMLElement>(null)
    const linksWrapRef = useRef<HTMLElement>(null)

    const inPlaceButton = (links: IMenu[]) => {
        return links.find(l => l.link === pathname)
    }

    const inPlace = (link: string) => {
        return link === pathname
    }

    const checkDropdownPosition = () => {
        if(containerRef.current && linksWrapRef.current){
            const containerData = containerRef.current.getBoundingClientRect()
            const linksWrapWidth = linksWrapRef.current.getBoundingClientRect().width
            const rightSpace = window.innerWidth - (containerData.left + RIGHT_GAP)

            if(rightSpace < linksWrapWidth){
                setAlignRight(true)
            }
            else{
                setAlignRight(false)
            }
        }
    }

    useLayoutEffect(() => {
        if(open){
            checkDropdownPosition()
        }
    }, [open, links])

    useLayoutEffect(() => {
        const onResize = () => {
            if(open){
                checkDropdownPosition()
            }
        }

        window.addEventListener('resize', onResize)
        if(open){
            onResize()
        }

        return () => window.removeEventListener('resize', onResize)
    }, [open])

    const dropdownStyle: CSSProperties = {
        display: open ? 'block' : 'none',
        left: alignRight ? 'auto' : '0px',
        right: alignRight ? '0px' : 'auto'
    }

    return (
        <section 
            ref={containerRef}
            className={classes.container}
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
        >
            <button className={classes.subTitle + (inPlaceButton(links) ? ` ${classes.selected}` : '')}>
                {title}
                <svg width="16" height="16" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M26 12L16 22L6 12" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </button>
            <section 
                ref={linksWrapRef}
                style={dropdownStyle}
                className={classes.linksWrap}
            >
                <section className={classes.hr} />
                <ul className={classes.links}>
                    {
                        links.map(link =>
                            <li 
                                key={link.title}
                                className={classes.item + ((link.link && inPlace(link.link)) ? ` ${classes.selected}` : '')}
                            >
                                {
                                    link.offSite
                                        ?
                                    <a 
                                        href={link.link || "/"}
                                        target="_blank"
                                    >
                                        {link.title}
                                    </a>
                                        :
                                    <Link 
                                        href={link.link || "/"}
                                    >
                                        {link.title}
                                    </Link>
                                }
                            </li>
                        )
                    }
                </ul>
            </section>
        </section>
    )
}
