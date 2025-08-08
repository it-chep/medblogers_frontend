import { FC } from "react";
import classes from './close.module.scss'


interface IProps {
    setOpen: (open: boolean) => void;
}

export const Close: FC<IProps> = ({setOpen}) => {


    const onClose = () => setOpen(false)

    return (
        <section onClick={onClose} className={classes.close}>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M25 7L7 25" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M25 25L7 7" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </section>
    )
}