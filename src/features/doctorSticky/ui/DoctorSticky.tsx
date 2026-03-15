"use client"

import { IDoctor, StickyContact } from "@/src/entities/doctor";
import { Curtain } from "@/src/shared/ui/curtain";
import { FC, useState } from "react";
import classes from './doctorSticky.module.scss'
 
interface IProps {
    isVip: boolean;
    doctor: IDoctor;
}

export const DoctorSticky: FC<IProps> = ({doctor, isVip}) => {

    const [open, setOpen] = useState<boolean>(true)

    return (
        <section className={classes.wrapper}>
            <section 
                onClick={() => setOpen(true)}
                className={classes.opener + (open ? ` ${classes.open}` : '')} 
            />
            <Curtain
                onCloseWrap={() => setOpen(false)}
                openWrap={open}
                backgroundColor="var(--light-black)"
            >
                <StickyContact 
                    name={doctor.name}
                    mainSpecialty={doctor.mainSpeciality.name}
                    tg={doctor.tgUrl}
                    vip={isVip}
                />
            </Curtain>
        </section>
    )
}