import {FC, PropsWithChildren} from "react";
import classes from  './buttonDark.module.scss'

interface Props {
    isLoading?: boolean;
    error?: string;
    onClick?: () => void;
}

export const ButtonDark: FC<Props & PropsWithChildren> = ({onClick, isLoading, error, children}) => {

    return (
        <button
            disabled={isLoading || Boolean(error)}
            className={classes.button}
            onClick={onClick}
        >
            {children}
        </button>
    )
}