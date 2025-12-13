import { ComponentProps, FC, PropsWithChildren } from "react";
import classes from './myButton.module.scss'

interface IProps {

}

export const MyButtonBlog: FC<IProps & ComponentProps<'button'> & PropsWithChildren> = ({children, ...props}) => {

    return (
        <button className={classes.button}>
            {children}
        </button>
    )
}