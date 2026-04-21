import { FC } from "react";
import classes from './homeNav.module.scss'
import { homeNavs } from "../../const/homeNavs";
import Link from "next/link";
import Image from "next/image";



export const HomeNav: FC = () => {



    return (
        <ul className={classes.list}>
            {
                homeNavs.map(nav => 
                    <li
                        key={nav.href}
                        className={classes.item}
                    >   
                        <Link
                            href={nav.href}
                            className={classes.link}
                        >
                            <section className={classes.image}>
                                <Image
                                    src={nav.svg}
                                    alt={nav.name}
                                    width={90}
                                    height={90}
                                />
                            </section>
                            <span 
                                className={classes.name}
                                style={{width: nav.width}}    
                            >
                                {nav.name}
                            </span>
                        </Link>
                    </li>
                )
            }
        </ul>
    )
}
