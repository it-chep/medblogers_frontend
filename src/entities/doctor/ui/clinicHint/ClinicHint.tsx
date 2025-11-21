"use client"

import { FC } from "react";
import classes from './clinicHint.module.scss'
import { ClinicContent } from "./ClinicContent";
import Image from "next/image";
import is_kf_doctor_img from '@/src/shared/lib/assets/is_kf_doctor.png'
import { Hint } from "@/src/shared/ui/hint";

interface IProps {
    name: string;
    sizeIcon?: number;
    gap?: number;
}

export const ClinicHint: FC<IProps> = ({name, sizeIcon = 16, gap = 4}) => {

    return (
        <span 
            onClick={e => {
                e.preventDefault()
            }} 
            className={classes.clinicLogoWrap}
            style={{gap}}
        >
            {name} 
            <Hint width={180} hint={<ClinicContent />}>
                <Image 
                    src={is_kf_doctor_img.src} 
                    width={sizeIcon} 
                    height={sizeIcon} 
                    alt="Клиника Фомина. Лого" 
                />
            </Hint>
        </span>
    )
}