"use client"

import { IDoctor, StickyContact } from "@/src/entities/doctor";
import { ShowContentSmoothly } from "@/src/features/ShowContentSmoothly";
import { Curtain } from "@/src/shared/ui/curtain";
import { FC, useState } from "react";

interface IProps {
    isVip: boolean;
    doctor: IDoctor;
}

export const Sticky: FC<IProps> = ({doctor, isVip}) => {

    const [isClose, setIsClose] = useState<boolean>(false)

    return (
        !isClose
            ?
        <ShowContentSmoothly
            speed_ms={250}
            mobile
        >
            <Curtain
                onCloseWrap={() => setIsClose(true)}
            >
                <StickyContact 
                    name={doctor.name}
                    mainSpecialty={doctor.mainSpeciality.name}
                    tg={doctor.tgUrl}
                    vip={isVip}
                />
            </Curtain>
        </ShowContentSmoothly>
            :
        <></>
    )
}