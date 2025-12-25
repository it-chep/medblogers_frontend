"use client"

import { FC, useEffect, useRef, useState } from "react";
import classes from './clinicHint.module.scss'
import { ClinicContent } from "./ClinicContent";
import Image from "next/image";
import is_kf_doctor_img from '@/src/shared/lib/assets/is_kf_doctor.png'
import { Hint } from "@/src/shared/ui/hint";
import { createPortal } from "react-dom";

interface IProps {
    name: string;
    sizeIcon?: number;
    gap?: number;
    paddingAbsolute?: number;
}

export const ClinicHint: FC<IProps> = ({name, sizeIcon = 16, gap = 4, paddingAbsolute}) => {

    const refClinicLogoWrap = useRef<HTMLSpanElement>(null)
    const [open, setOpen] = useState<boolean>(false)

    const [isMobile, setIsMobile] = useState<boolean>(false)

    const onResize = () => {
        if(window.innerWidth <= 480){
            setIsMobile(true)
        }
        else{
            setIsMobile(false)
        }
    }

    useEffect(() => {
        onResize()

        window.addEventListener('resize', onResize)

        return () => window.removeEventListener('resize', onResize)
    }, [])


    return (
        <>
        <span
            className={classes.clinicLogoWrap}
            style={{gap}}
            ref={refClinicLogoWrap}
        >
            {name} 
            <span 
                onClick={e => {
                    e.preventDefault()
                }} 
            >
                <Hint 
                    width={180} 
                    hint={<ClinicContent />}
                    setOpenWrap={setOpen}
                    useHr={isMobile}
                    staticWidth
                    paddingAbsolute={paddingAbsolute}
                >
                    <Image 
                        src={is_kf_doctor_img.src} 
                        width={sizeIcon} 
                        height={sizeIcon} 
                        alt="Клиника Фомина. Лого" 
                    />
                </Hint>       
            </span>
        </span>
        {
            open
                &&
            createPortal(
                <section 
                    onClick={e => 
                        e.preventDefault()
                    } 
                    className={classes.abs} 
                />,
                refClinicLogoWrap.current?.closest('a') || document.body
            )
        }    
        </>     
    )
}