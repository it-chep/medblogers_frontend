import {FC, HTMLAttributes, PropsWithChildren} from "react";
import classes from  './myButton.module.scss'

interface Props {
    isLoading?: boolean;
    error?: string;
    onClick?: () => void;
    grayStyle?: boolean;
    style?: HTMLAttributes<HTMLButtonElement>['style'];
}

export const MyButton: FC<Props & PropsWithChildren> = ({onClick, style, isLoading, error, grayStyle, children}) => {

    return (
        <button
            disabled={isLoading || Boolean(error)}
            className={classes.myButton + (grayStyle ? ` ${classes.grayStyle}` : '')}
            onClick={onClick}
            style={style}
        >
            {children}
        </button>
    )
}