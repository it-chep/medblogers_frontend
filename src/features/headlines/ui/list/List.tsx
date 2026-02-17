import { FC } from "react";
import classes from './list.module.scss'

interface IProps {
    headlines: Element[];
    selectedHeadline: Element | null;
    setOpen?: () => void;
}

export const List: FC<IProps> = ({headlines, selectedHeadline, setOpen=()=>{}}) => {

    const toHeadline = (headline: Element) => {
        const marginTop = 20; 
        const top = headline.getBoundingClientRect().top + window.scrollY - marginTop;
        window.scrollTo({top, behavior: 'smooth'})
        setOpen()
    }

    return (
        <ul className={classes.list}>
            {headlines.map(headline => 
                <li
                    key={headline.textContent}
                    className={classes.item + (selectedHeadline === headline ? ` ${classes.selected}` : '')}
                    onClick={() => toHeadline(headline)}
                >
                    {headline.textContent}
                </li>
            )}
        </ul>
    )
}