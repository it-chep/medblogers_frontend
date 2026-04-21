import { FC, useMemo } from "react";
import classes from './homeNav.module.scss'
import { homeNavs } from "../../lib/const/homeNavs";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";


export const HomeNav: FC = () => {

    const pathname = usePathname()

    const navsNoPage = useMemo(() => {
        return homeNavs.filter(nav => nav.href !== pathname)
    }, [pathname])

    return (
        <ul className={classes.list}>
            {
                navsNoPage.map(nav => 
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
