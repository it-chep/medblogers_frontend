import { FC } from "react";
import classes from './list.module.scss'
import { ILink } from "../../model/types";

interface IProps {
    items: ILink[];
}

export const ListLinks: FC<IProps> = ({items}) => {


    return (
        <ul className={classes.listLinks}>
            {items.map(item =>
                item.noindex
                    ?
                <li key={item.label}><noindex><a target='_blank' rel="nofollow" href={item.link}>{item.label} {item.bold ? <span className={classes.bold}>{item.bold}</span> : <></>}</a></noindex></li>
                    :
                <li key={item.label}><a target='_blank' href={item.link}>{item.label} {item.bold ? <span className={classes.bold}>{item.bold}</span> : <></>}</a></li>
            )}
        </ul>   
    )
}