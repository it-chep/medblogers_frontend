import Link from "next/link";
import { FC } from "react";
import classes from './breadcrumbs.module.scss'
import { IBreadcrumb } from "../model/types";

interface IProps {
    breadcrumbs: IBreadcrumb[]
}

export const Breadcrumbs: FC<IProps> = ({breadcrumbs}) => {

    return (
        <nav className={classes.breadcrumbs}>
            <ul className={classes.list}>
                {breadcrumbs.map((item, index) => (
                    <li key={item.path} className={classes.breadcrumb}>
                        {
                            index !== 0
                                &&
                            <span className={classes.separator}>
                                <svg width="6" height="9" viewBox="0 0 6 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.174261 7.89923C-0.0582026 8.11746 -0.0581163 8.48664 0.17445 8.70476C0.386973 8.90409 0.71778 8.90404 0.930243 8.70465L4.94944 4.93281C5.02035 4.86669 5.0766 4.78806 5.11501 4.70146C5.15335 4.61485 5.17314 4.52197 5.17314 4.42817C5.17314 4.33436 5.15335 4.24148 5.11501 4.15488C5.0766 4.06827 5.02035 3.98964 4.94944 3.92352L0.930233 0.149688C0.717818 -0.049758 0.386969 -0.0497713 0.174539 0.149659C-0.0577056 0.367691 -0.0577199 0.7365 0.174508 0.95455L3.87283 4.42709L0.174261 7.89923Z" fill="#AEAEAE"/>
                                </svg>
                            </span>
                        }
                        {
                            index === breadcrumbs.length - 1 
                                ?
                            <span className={classes.label}>{item.label}</span>
                                :
                            <Link href={item.path} className={classes.link}>
                                {item.label}
                            </Link>
                        }
                    </li>
                ))}
            </ul>
        </nav>
    )
}