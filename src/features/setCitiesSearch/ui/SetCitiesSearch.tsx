"use client"

import { FC } from "react";
import classes from './setCitiesSearch.module.scss'
import { IItem } from "@/src/shared/model/types";
import { usePathname, useRouter } from "next/navigation";

interface IProps {
    cities: IItem[];
    vip?: boolean;
}

export const SetCitiesSearch: FC<IProps> = ({cities, vip}) => {

    const router = useRouter()
    const pathname = usePathname()

    return (
        <section 
            className={classes.city + (vip ? ` ${classes.vip}` : '')}
        >
            <svg width="11" height="13" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 6.46475C13.993 7.73269 13.6272 8.8507 13.045 9.91247C12.2824 11.3022 11.2443 12.5037 10.0969 13.6263C9.31726 14.3901 8.48353 15.0995 7.59668 15.7536C7.15476 16.0798 6.84712 16.0845 6.4042 15.7536C4.55636 14.3714 2.90492 12.8148 1.60121 10.9574C0.873696 9.92185 0.309524 8.81602 0.0970823 7.579C-0.218574 5.73659 0.237372 4.06474 1.43787 2.58219C2.48505 1.28988 3.87093 0.449271 5.57247 0.142827C8.17488 -0.326678 10.4105 0.363054 12.2073 2.18672C13.4068 3.405 13.9719 4.8763 14 6.46475ZM6.99142 9.4514C8.711 9.45515 10.1099 8.15253 10.1099 6.54722C10.1109 4.94284 8.712 3.63366 6.99643 3.63366C5.28888 3.63366 3.89298 4.93628 3.88897 6.53316C3.88697 8.14503 5.27084 9.44765 6.99142 9.4514Z"/>
            </svg>
            {cities.map((c, ind) => 
                <span 
                    key={c.id} 
                    onClick={(e) => {
                        e.preventDefault()
                        router.push(pathname + '/?cities=' + c.id)
                    }}
                >
                    {c.name}
                    {(ind + 1 !== cities.length) && <>, </>}
                </span>
            )}
        </section>
    )
}