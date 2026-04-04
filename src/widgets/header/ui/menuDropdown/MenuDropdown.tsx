import { FC } from "react";
import classes from './menuDropdown.module.scss'
import Link from "next/link";
import { IMenu } from "../../model/types";
import { usePathname } from "next/navigation";

interface IProps {
    title: string;
    links: IMenu[];
}

export const MenuDropdown: FC<IProps> = ({title, links}) => {

    const pathname = usePathname()

    const inPlaceButton = (links: IMenu[]) => {
        return links.find(l => l.link === pathname)
    }

    const inPlace = (link: string) => {
        return link === pathname
    }

    return (
        <section className={classes.container}>
            <button className={classes.subTitle + (inPlaceButton(links) ? ` ${classes.selected}` : '')}>
                {title}
                <svg width="16" height="16" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M26 12L16 22L6 12" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </button>
            <section className={classes.linksWrap}>
                <section className={classes.hr} />
                <ul className={classes.links}>
                    {
                        links.map(link =>
                            <li 
                                key={link.title}
                                className={classes.item + ((link.link && inPlace(link.link)) ? ` ${classes.selected}` : '')}
                            >
                                <Link 
                                    href={link.link || "/"}
                                >
                                    {link.title}
                                </Link>
                            </li>
                        )
                    }
                </ul>
            </section>
        </section>
    )
}