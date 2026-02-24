import { FC, PropsWithChildren, ReactElement } from "react";
import classes from './iconContainer.module.scss'

interface IProps {
    background: string;
}

export const IconContainer: FC<IProps & PropsWithChildren> = ({background, children}) => {


    return (
        <section 
            style={{backgroundColor: background}}
            className={classes.container}
        >   
            {children}
        </section>
    )
}