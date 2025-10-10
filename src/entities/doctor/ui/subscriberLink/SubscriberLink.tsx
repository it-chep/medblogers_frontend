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
                <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.517909 8.49615C0.200603 8.7624 0.159215 9.23546 0.425467 9.55277C0.691718 9.87008 1.16478 9.91146 1.48209 9.64521L1 9.07068L0.517909 8.49615ZM10.1736 2.06538C10.2097 1.65274 9.90449 1.28897 9.49186 1.25287L2.76754 0.664568C2.3549 0.628466 1.99113 0.933709 1.95503 1.34635C1.91893 1.75898 2.22417 2.12276 2.63681 2.15886L8.61398 2.68179L8.09104 8.65896C8.05494 9.0716 8.36018 9.43537 8.77282 9.47147C9.18546 9.50758 9.54923 9.20233 9.58533 8.7897L10.1736 2.06538ZM1 9.07068L1.48209 9.64521L9.90858 2.57455L9.42649 2.00001L8.9444 1.42548L0.517909 8.49615L1 9.07068Z" fill="#B6B6B6"/>
                </svg>

            </a>
        </section>
    )
}