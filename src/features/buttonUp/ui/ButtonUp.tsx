"use client"

import { FC, useEffect, useState } from "react";
import classes from './buttonUp.module.scss'

export const ButtonUp: FC = () => {

    const [visible, setVisible] = useState<boolean>(false)

    useEffect(() => {

        const onScroll = () => {
            if(window.scrollY > window.innerHeight){
                setVisible(true)
            }
            else{
                setVisible(false)
            }
        }
        
        window.addEventListener('scroll', onScroll)

        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    const onClick = () => {
        window.scrollTo({top: 0, behavior: 'smooth'})
    }

    return (
        <section 
            style={{display: visible ? 'block' : 'none'}} 
            className={classes.container}
            onClick={onClick}
        >
            <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <foreignObject x="-10" y="-10" width="100" height="100"><div style={{backdropFilter: "blur(5px)", clipPath: "url(#bgblur_0_2033_131592_clip_path)", height: "100%", width: "100%"}}></div></foreignObject>
                <g>
                    <rect width="80" height="80" rx="20" fill="#2D99FC"/>
                    <g clipPath="url(#clip1_2033_131592)">
                        <mask id="mask0_2033_131592" maskUnits="userSpaceOnUse" x="26" y="26" width="30" height="27">
                            <path d="M56 26.8252V52.9121H26V26.8252H56Z" fill="white"/>
                        </mask>
                        <g mask="url(#mask0_2033_131592)">
                            <path d="M52.6114 47.5781L54.8828 45.2716L42.5035 32.7086C42.3052 32.506 42.0693 32.3453 41.8095 32.2356C41.5496 32.126 41.271 32.0695 40.9896 32.0695C40.7082 32.0695 40.4295 32.126 40.1697 32.2356C39.9099 32.3453 39.674 32.506 39.4757 32.7086L27.0899 45.2716L29.3614 47.576L40.9864 35.7846L52.6114 47.5781Z" fill="white"/>
                        </g>
                    </g>
                </g>
                <defs>
                    <clipPath id="bgblur_0_2033_131592_clip_path" transform="translate(10 10)"><rect width="80" height="80" rx="20"/></clipPath>
                    <clipPath id="clip1_2033_131592">
                        <rect width="33" height="20" fill="white" transform="matrix(-1 0 0 -1 57 49)"/>
                    </clipPath>
                </defs>
            </svg>
        </section>
    )
}