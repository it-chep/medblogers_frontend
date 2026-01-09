"use client"

import {FC, MouseEvent} from "react";
import classes from './subscriberLink.module.scss'
import { Content } from "./Content";

interface IProps {
    link: string;
    socialIconSrc: string;
    subsCount?: string;
    text: string;
    useA: boolean;
}

export const SubscriberLink: FC<IProps> = ({socialIconSrc, subsCount = '', text, link, useA}) => {

    const onClick = (e: MouseEvent) => {
        e.preventDefault()
        window.open(link)
    }

    return (
        <section className={classes.subscriberLinkWrapper}>
            {
                useA
                    ?
                <a 
                    target="_blank"
                    className={classes.subscriberLink} 
                    href={link}
                >
                    <Content 
                        socialIconSrc={socialIconSrc}
                        subsCount={subsCount}
                        text={text}
                    />
                </a>
                    :
                <section
                    className={classes.subscriberLink} 
                    onClick={onClick}
                >
                    <Content 
                        socialIconSrc={socialIconSrc}
                        subsCount={subsCount}
                        text={text}
                    />
                </section>
            }
        </section>
    )
}