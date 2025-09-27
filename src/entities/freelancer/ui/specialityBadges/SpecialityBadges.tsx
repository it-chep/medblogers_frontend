

import { FC } from "react";
import classes from './specialityBadges.module.scss'
import Link from "next/link";


interface IProps {
    text: string;
    id: string;
    main?: boolean;
}

export const SpecialityBadge: FC<IProps> = ({text, id, main = null}) => {



    return (
        <Link 
            href={`/?specialities=${id}`}
            className={classes.badge + (main ? ` ${classes.main}` : '')}
        >
            {text}
        </Link>
    )
}