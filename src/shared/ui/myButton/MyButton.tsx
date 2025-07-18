import {FC, PropsWithChildren} from "react";
import classes from  './myButton.module.scss'

interface Props {
    isLoading?: boolean;
    error?: string;
    onClick?: () => void;
}

export const MyButton: FC<Props & PropsWithChildren> = ({onClick, isLoading, error, children}) => {


    return (
        <button
            disabled={isLoading || Boolean(error)}
            className={classes.myButton}
            onClick={onClick}
        >
            {children}
        </button>
    )
}