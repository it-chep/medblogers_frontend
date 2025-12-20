"use client"

import { FC, MouseEvent } from "react";
import classes from './setSpecialitiesSearch.module.scss'
import { IItem } from "@/src/shared/model/types";
import { useRouter } from "next/navigation";

interface IProps {
    specialities: IItem[]
}

export const SetSpecialitiesSearch: FC<IProps> = ({specialities}) => {

    const router = useRouter()

    return (
        <section 
            className={classes.speciality}
        >
            {specialities.map((spec, ind) => 
                <span 
                    key={spec.id} 
                    onClick={(e) => {
                        e.preventDefault()
                        router.push('/?specialities=' + spec.id)
                    }}
                >
                    {spec.name}
                    {(ind + 1 !== specialities.length) && <>, </>}
                </span>
            )}
        </section>
    )
}