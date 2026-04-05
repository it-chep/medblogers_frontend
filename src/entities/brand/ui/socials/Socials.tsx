import { FC } from "react";
import classes from './socials.module.scss'
import {TgLogo} from '@/src/shared/lib/assets/tg_logo'
import {TtLogo} from '@/src/shared/lib/assets/ttLogo'
import inst_logo from '@/src/shared/lib/assets/Instagram_icon.png'
import dzen_logo from '@/src/shared/lib/assets/dzen_logo.png'
import youtube_logo from '@/src/shared/lib/assets/Youtube_logo.png'
import vk_logo from '@/src/shared/lib/assets/vk_logo.png'
import whatsapp_logo from '@/src/shared/lib/assets/whatsapp_logo.png'
import otherSocial from '@/src/shared/lib/assets/otherSocial.svg'
import Image from "next/image";
import { IBrandSocialNetworkItem } from "../../model/types";

interface IProps {
    socialNetwork: IBrandSocialNetworkItem[];
}

export const Socials: FC<IProps> = ({socialNetwork}) => {

    const socialConsts: {slug: string, img: string}[] = [
        {slug: 'site', img: otherSocial},
        {slug: 'telegram', img: 'svg'}, 
        {slug: 'instagram', img: inst_logo.src}, 
        {slug: 'vk', img: vk_logo.src}, 
        {slug: 'whatsapp', img: whatsapp_logo.src},
        {slug: 'dzen', img: dzen_logo.src}, 
        {slug: 'youtube', img: youtube_logo.src},
        {slug: 'tiktok', img: 'svg'},
    ]

    const socialNetworkExist: (IBrandSocialNetworkItem & {img: string})[] = [];

    socialConsts.forEach(socialConst => {
        const target = socialNetwork.find(s => s.slug === socialConst.slug)
        if(target){
            socialNetworkExist.push({
                ...target,
                img: socialConst.img
            })
        }
    })

    return (
         <ul className={classes.socials}>
            {socialNetworkExist.map((s, ind) => 
                <a 
                    key={s.name} 
                    style={{zIndex: ind}} 
                    className={classes.social}
                    href={s.link}
                    target="_blank"
                >
                    {
                        s.slug === 'telegram'
                            ?
                        <TgLogo />
                            :
                        s.slug === 'tiktok'
                            ?
                        <TtLogo />
                            :
                        <Image alt={s.name} height={26} width={26} src={s.img} />
                    }
                    <span>{s.name}</span>
                </a>
            )}
        </ul>
    )
}