import { FC } from "react";
import classes from './desktopMenu.module.scss'
import Link from "next/link";
import { LogoSvg } from "../../lib/assets/LogoSvg";
import { menuLinks } from "../../lib/const/links";

interface IProps {
    
}

export const DesktopMenu: FC<IProps> = () => {


    return (
        <section className={classes.container}>
            <Link href={'/'}>
                <LogoSvg />
            </Link>
            <nav className={classes.nav}>
                <ul className={classes.list}>
                    {menuLinks.map(link => 
                        <li 
                            key={link.link}
                            className={classes.item}
                        >
                            <Link 
                                href={link.link}
                            >
                                {link.name}
                            </Link>
                        </li>    
                    )}
                    <li className={classes.hr}>c</li>
                </ul>
            </nav>  
        </section>
    )
}