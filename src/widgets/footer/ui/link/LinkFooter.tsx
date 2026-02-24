import { FC } from "react";
import { ILink } from "../../model/types";
import classes from './link.module.scss'
import Link from "next/link";

interface IProps {
    link: ILink;
}

export const LinkFooter: FC<IProps> = ({link}) => {


    return (
        link.site
            ?
        <Link
            rel={link.noindex ? "nofollow" : ''}
            href={link.link}
            className={classes.link}
        >
            {link.label} {link.bold ? <span className={classes.bold}>{link.bold}</span> : <></>}
        </Link>
            :
        <a 
            target='_blank' 
            rel={link.noindex ? "nofollow" : ''}
            href={link.link}
            className={classes.link}
        >
            {link.label} {link.bold ? <span className={classes.bold}>{link.bold}</span> : <></>}
        </a>
    )
}