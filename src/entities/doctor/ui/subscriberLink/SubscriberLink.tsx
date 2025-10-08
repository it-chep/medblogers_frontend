import {FC} from "react";
import classes from './subscriberLink.module.scss'
import Image from "next/image";

interface IProps {
    link: string;
    socialIconSrc: string;
    subsCount?: string;
    text: string;
}

export const SubscriberLink: FC<IProps> = ({socialIconSrc, subsCount = null, text, link}) => {

    return (
        <section className={classes.subscriberLinkWrapper}>
            <a 
                target="_blank"
                className={classes.subscriberLink} 
                href={link}
            >
                <Image src={socialIconSrc} alt="Соцсеть" height={30} width={30} />
                <section className={classes.subsText}>
                    { subsCount && <span className={classes.subsCount}>{subsCount}</span> }
                    <span>{text}</span>
                </section>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.292893 10.1924C-0.0976311 10.5829 -0.0976311 11.2161 0.292893 11.6066C0.683418 11.9971 1.31658 11.9971 1.70711 11.6066L1 10.8995L0.292893 10.1924ZM11.8995 0.99998C11.8995 0.447695 11.4518 -1.99303e-05 10.8995 -1.95089e-05L1.89949 -1.93824e-05C1.34721 -1.97196e-05 0.899495 0.447695 0.899495 0.99998C0.899495 1.55227 1.34721 1.99998 1.89949 1.99998L9.8995 1.99998L9.89949 9.99998C9.89949 10.5523 10.3472 11 10.8995 11C11.4518 11 11.8995 10.5523 11.8995 9.99998L11.8995 0.99998ZM1 10.8995L1.70711 11.6066L11.6066 1.70709L10.8995 0.99998L10.1924 0.292874L0.292893 10.1924L1 10.8995Z" fill="#ABABAB"/>
                </svg>
            </a>
        </section>
    )
}