import {FC, PropsWithChildren} from "react";
import classes from  './myButton.module.scss'

interface Props {
    isLoading?: boolean;
    error?: string;
}

export const MyButton: FC<Props & PropsWithChildren> = ({isLoading, error, children}) => {


    return (
        <button className={classes.myButton}>
            {children}
        </button>
    )
}