"use client"

import { FC } from "react";
import classes from './setSpecialitiesSearch.module.scss'
import { IItem } from "@/src/shared/model/types";
import { usePathname, useRouter } from "next/navigation";

interface IProps {
    specialities: IItem[];
    vip?: boolean;
}

export const SetSpecialitiesSearch: FC<IProps> = ({specialities, vip}) => {

    const router = useRouter()
    const pathname = usePathname()

    return (
        <section 
            className={classes.speciality + (vip ? ` ${classes.vip}` : '')}
        >
            {specialities.map((spec, ind) => 
                <span 
                    key={spec.id} 
                    onClick={(e) => {
                        e.preventDefault()
                        router.push(pathname + '/?specialities=' + spec.id)
                    }}
                >
                    {spec.name}
                    {(ind + 1 !== specialities.length) && <>, </>}
                </span>
            )}
        </section>
    )
}