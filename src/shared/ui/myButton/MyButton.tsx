import {FC, PropsWithChildren} from "react";
import classes from  './myButton.module.scss'

interface Props {
    isLoading?: boolean;
    error?: string;
    onClick?: () => void;
    grayStyle?: boolean;
}

export const MyButton: FC<Props & PropsWithChildren> = ({onClick, isLoading, error, grayStyle, children}) => {


    return (
        <button
            disabled={isLoading || Boolean(error)}
            className={classes.myButton + (grayStyle ? ` ${classes.grayStyle}` : '')}
            onClick={onClick}
        >
            {children}
        </button>
    )
}