import { ComponentProps, FC, PropsWithChildren } from "react";
import classes from './myButton.module.scss'

export const MyButtonBlog: FC<ComponentProps<'button'> & PropsWithChildren> = ({children, ...props}) => {

    return (
        <button className={classes.button}>
            {children}
        </button>
    )
}