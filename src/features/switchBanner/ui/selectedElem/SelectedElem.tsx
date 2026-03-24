import { FC } from "react";
import { ISwitchBannerItem } from "../../model/types";
import Link from "next/link";

interface IProps {
    elem: ISwitchBannerItem;
}

export const SelectedElem: FC<IProps> = ({elem}) => {


    return (
       elem.link
            ?
        elem.toSite
            ?
        <Link
            href={elem.link}
        >
            <img 
                src={elem.url}
            />
        </Link>
            :
        <a 
            href={elem.link}
            target="_blank"
        >
            <img 
                src={elem.url}
            />
        </a>
            :
        <img 
            src={elem.url}
        />
    )
}