

import { FC } from "react";
import classes from './specialityBadge.module.scss'
import Link from "next/link";


interface IProps {
    text: string;
    id: string;
    main?: boolean;
    vip?: boolean;
}

export const SpecialityBadge: FC<IProps> = ({text, id, vip = null, main = null}) => {

    return (
        <Link 
            href={`/?specialities=${id}`}
            className={classes.badge + (vip ? ` ${classes.vip}` : '') + (main ? ` ${classes.main}` : '')}
        >
            {text}
        </Link>
    )
}