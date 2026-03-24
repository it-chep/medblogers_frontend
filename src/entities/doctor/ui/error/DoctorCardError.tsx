import { FC } from "react";
import classes from './doctorCardError.module.scss'

export const DoctorCardError: FC = () => {

    return (
        <a 
            className={classes.container}
            href="https://t.me/m/FPlmwxZbNTYy"
            target="_blank"
        >
            <svg width="18" height="18" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.84 7.75C8.0751 7.08167 8.53915 6.51811 9.14995 6.15913C9.76076 5.80016 10.4789 5.66894 11.1772 5.78871C11.8755 5.90849 12.5088 6.27152 12.9651 6.81353C13.4213 7.35553 13.6711 8.04152 13.67 8.75C13.67 9.79379 12.5313 10.751 11.75 11.25C10.9687 11.749 10.75 12.75 10.75 12.75M10.75 15.75H10.76M20.75 10.75C20.75 16.2728 16.2728 20.75 10.75 20.75C5.22715 20.75 0.75 16.2728 0.75 10.75C0.75 5.22715 5.22715 0.75 10.75 0.75C16.2728 0.75 20.75 5.22715 20.75 10.75Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>Нашли ошибку в карточке? <span className={classes.write}>Напишите нам</span></span>
        </a>
    )
}