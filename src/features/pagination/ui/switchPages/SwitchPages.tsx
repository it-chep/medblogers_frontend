import { FC, PropsWithChildren } from "react";
import classes from './switchPages.module.scss'

interface IProps {
    currentPage: number;
    totalPages: number;
    onSelected: (page: number) => void;
}

export const SwitchPages: FC<IProps & PropsWithChildren> = ({currentPage, onSelected, totalPages, children}) => {

    const left = () => {
        if(currentPage > 1){
            onSelected(currentPage - 1)
        }
    }

    const right = () => {
        if(currentPage < totalPages){
            onSelected(currentPage + 1)
        }
    }

    return (
        <>
            <svg 
                className={classes.arrayLeft + (currentPage === 1 ? (' ' + classes.disabled) : '')} 
                width="32" 
                height="32" 
                viewBox="0 0 32 32" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                onClick={left}
            >
                <path d="M20 26L10 16L20 6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            {children}
            <svg 
                className={classes.arrayRight + (currentPage === totalPages ? (' ' + classes.disabled) : '')} 
                width="32" 
                height="32" 
                viewBox="0 0 32 32" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                onClick={right}
            >
                <path d="M12 6L22 16L12 26" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </>
    )
}