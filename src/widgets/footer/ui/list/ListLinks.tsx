import { FC } from "react";
import classes from './list.module.scss'
import { ILink } from "../../model/types";
import Link from "next/link";

interface IProps {
    items: ILink[];
}

export const ListLinks: FC<IProps> = ({items}) => {


    return (
        <ul className={classes.listLinks}>
            {items.map(item =>
                <li key={item.label}><Link href={item.link}>{item.label} {item.bold ? <span className={classes.bold}>{item.bold}</span> : <></>}</Link></li>
            )}
        </ul>   
    )
}