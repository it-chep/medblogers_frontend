import { FC } from "react";
import classes from './loaderContainer.module.scss'

interface IProps {
    blue?: boolean;
}

export const LoaderContainer: FC<IProps> = ({blue}) => {

    return (
        <section className={classes.loaderContainer + (blue ? ` ${classes.blue}` : '')} />
    )
}