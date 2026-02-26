import { FC } from "react";
import classes from './list.module.scss'
import { ILink } from "../../model/types";
import { LinkFooter } from "../link/LinkFooter";

interface IProps {
    items: ILink[];
}

export const ListLinks: FC<IProps> = ({items}) => {

    return (
        <ul className={classes.listLinks}>
            {items.map(item =>
                <li key={item.label}>
                    {
                        item.noindex
                            ?
                        <noindex>
                            <LinkFooter link={item} />
                        </noindex>
                            :
                        <LinkFooter link={item} />
                    }
                </li>
            )}
        </ul>   
    )
}