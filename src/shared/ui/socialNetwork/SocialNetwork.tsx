import { FC } from "react";
import classes from './socialNetwork.module.scss'
import {TgLogo} from '@/src/shared/lib/assets/tg_logo'
import {TtLogo} from '@/src/shared/lib/assets/ttLogo'
import inst_logo from '@/src/shared/lib/assets/Instagram_icon.png'
import dzen_logo from '@/src/shared/lib/assets/dzen_logo.png'
import youtube_logo from '@/src/shared/lib/assets/Youtube_logo.png'
import vk_logo from '@/src/shared/lib/assets/vk_logo.png'
import whatsapp_logo from '@/src/shared/lib/assets/whatsapp_logo.png'
import Image from "next/image";

interface IProps {
    socialNetwork: {
        id: number;
        name: string;
        slug: string;
    }[];
    miniature?: boolean;
    width?: number;
}

export const SocialNetwork: FC<IProps> = ({socialNetwork, miniature, width}) => {

    const socialConsts: {name: string, img: string}[] = [
        {name: 'telegram', img: 'svg'}, 
        {name: 'instagram', img: inst_logo.src}, 
        {name: 'vk', img: vk_logo.src}, 
        {name: 'whatsapp', img: whatsapp_logo.src},
        {name: 'dzen', img: dzen_logo.src}, 
        {name: 'youtube', img: youtube_logo.src},
        {name: 'tiktok', img: 'svg'},
    ]

    const socialNetworkExist = socialConsts.filter(socialConst => {
        if(socialNetwork.findIndex(s => (s.slug === socialConst.name) || (s.name === socialConst.name)) >= 0){
            return true
        }
        return false
    })

    return (
        <ul className={classes.socials + (miniature ? ` ${classes.miniature}` : '')}>
            {socialNetworkExist.map((s, ind) => 
                <li 
                    key={s.name} 
                    style={{zIndex: ind}} 
                    className={classes.social}
                >
                    {
                        s.name === 'telegram'
                            ?
                        <TgLogo width={width} />
                            :
                        s.name === 'tiktok'
                            ?
                        <TtLogo width={width} />
                            :
                        <Image alt={s.name} height={width ?? 22} width={width ?? 22} src={s.img} />
                    }
                </li>
            )}
        </ul>
    )
}