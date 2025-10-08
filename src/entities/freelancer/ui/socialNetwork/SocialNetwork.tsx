import { FC } from "react";
import classes from './socialNetwork.module.scss'
import { IFreelancer } from "../../model/types";
import tg_logo from '@/src/shared/lib/assets/telegram_logo.png'
import inst_logo from '@/src/shared/lib/assets/Instagram_icon.png'
import dzen_logo from '@/src/shared/lib/assets/dzen_logo.png'
import youtube_logo from '@/src/shared/lib/assets/Youtube_logo.png'
import vk_logo from '@/src/shared/lib/assets/vk_logo.png'
import Image from "next/image";

interface IProps {
    socialNetwork: IFreelancer['socialNetworks'];
    label: string;
}

export const SocialNetwork: FC<IProps> = ({socialNetwork, label}) => {

    const socialConsts: {name: string, img: string}[] = [
        {name: 'telegram', img: tg_logo.src}, 
        {name: 'instagram', img: inst_logo.src}, 
        {name: 'vk', img: vk_logo.src}, 
        {name: 'dzen', img: dzen_logo.src}, 
        {name: 'youtube', img: youtube_logo.src}
    ]

    const socialNetworkFreelancer = socialConsts.filter(socialConst => {
        if(socialNetwork.findIndex(s => (s.slug === socialConst.name) || (s.name === socialConst.name)) >= 0){
            return true
        }
        return false
    })

    return (
        <section className={classes.container}>
            {label}
           <ul className={classes.socials}>
                {socialNetworkFreelancer.map((s, ind) => 
                    <li 
                        key={s.name} 
                        style={{zIndex: ind}} 
                        className={classes.social}
                    >
                        <Image alt={s.name} height={22} width={22} src={s.img} />
                    </li>
                )}
           </ul>
        </section>
    )
}