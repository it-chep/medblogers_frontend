"use client"

import { FC, MouseEvent } from "react";
import classes from './setCitiesSearch.module.scss'
import { IItem } from "@/src/shared/model/types";
import { useRouter } from "next/navigation";
import Image from "next/image";
import markImg from '@/src/shared/lib/assets/mark_blue.png'

interface IProps {
    cities: IItem[]
}

export const SetCitiesSearch: FC<IProps> = ({cities}) => {

    const router = useRouter()

    return (
        <section 
            className={classes.city}
        >
            <Image alt="Метка" width={11} height={13} src={markImg.src} />
            {cities.map((c, ind) => 
                <span 
                    key={c.id} 
                    onClick={(e) => {
                        e.preventDefault()
                        router.push('/?cities=' + c.id)
                    }}
                >
                    {c.name}
                    {(ind + 1 !== cities.length) && <>, </>}
                </span>
            )}
        </section>
    )
}