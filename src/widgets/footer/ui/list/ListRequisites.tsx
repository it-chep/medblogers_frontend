import { FC } from "react";
import classes from './list.module.scss'

interface IProps {
    requisites: string[]
}

export const ListRequisites: FC<IProps> = ({requisites}) => {


    return (
        <ul className={classes.listRequisites}>
            {requisites.map((requisite, ind) =>
                <li key={ind}>{requisite}</li>
            )}
        </ul>   
    )
}