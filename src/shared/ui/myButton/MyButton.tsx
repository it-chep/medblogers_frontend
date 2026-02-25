import {FC, HTMLAttributes, PropsWithChildren} from "react";
import classes from  './myButton.module.scss'

interface Props {
    isLoading?: boolean;
    error?: string;
    onClick?: () => void;
    grayStyle?: boolean;
    style?: HTMLAttributes<HTMLButtonElement>['style'];
    turquoise?: boolean;
}

export const MyButton: FC<Props & PropsWithChildren> = ({onClick, style, isLoading, error, grayStyle, turquoise, children}) => {

    return (
        <button
            disabled={isLoading || Boolean(error)}
            className={
                classes.myButton + (grayStyle ? ` ${classes.grayStyle}` : '') + (turquoise ? ` ${classes.turquoise}` : '')
            }
            onClick={onClick}
            style={style}
        >
            {children}
        </button>
    )
}