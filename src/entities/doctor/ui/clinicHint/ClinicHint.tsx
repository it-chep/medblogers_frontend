"use client"

import { FC, useRef, useState } from "react";
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
}

export const ClinicHint: FC<IProps> = ({name, sizeIcon = 16, gap = 4}) => {

    const refClinicLogoWrap = useRef<HTMLSpanElement>(null)
    const [open, setOpen] = useState<boolean>(false)

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