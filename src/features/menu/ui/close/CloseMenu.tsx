import { FC } from "react";
import classes from './close.module.scss'


interface IProps {
    setOpen: (open: boolean) => void;
}

export const CloseMenu: FC<IProps> = ({setOpen}) => {


    const onClose = () => setOpen(false)

    return (
        <section onClick={onClose} className={classes.close}>
            
        </section>
    )
}