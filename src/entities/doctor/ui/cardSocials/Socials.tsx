import { FC } from "react";
import { SubscriberLink } from "../subscriberLink/SubscriberLink";
import { IDoctor } from "../../model/types";
import classes from './socials.module.scss'
import tg_logo from '@/src/shared/lib/assets/telegram_logo.png'
import inst_logo from '@/src/shared/lib/assets/Instagram_icon.png'
import dzen_logo from '@/src/shared/lib/assets/dzen_logo.png'
import youtube_logo from '@/src/shared/lib/assets/Youtube_logo.png'
import internet_logo from '@/src/shared/lib/assets/internet.svg'
import tiktok_logo from '@/src/shared/lib/assets/tiktok_logo.svg'
import vk_logo from '@/src/shared/lib/assets/vk_logo.png'

import { LastUpdated } from "../lastUpdated/LastUpdated";

interface IProps {
    doctor: IDoctor;
}

export const Socials: FC<IProps> = ({doctor}) => {

    console.log(doctor.tgSubsCount)

    return (
        <section className={classes.socials}>
            <section className={classes.profiles}>
                {
                    doctor.tgSubsCount !== '0'
                        &&
                    <section>
                        <SubscriberLink 
                            link={doctor.tgUrl}
                            subsCount={doctor.tgSubsCount}
                            text={doctor.tgSubsCountText}
                            socialIconSrc={tg_logo.src}
                        />
                        <LastUpdated lastUpdated={doctor.tgLastUpdatedDate} />
                    </section>
                }
                {
                    doctor.instSubsCount !== '0'
                        &&
                    <section>
                        <SubscriberLink
                            link={doctor.instUrl}
                            subsCount={doctor.instSubsCount}
                            text={doctor.instSubsCountText}
                            socialIconSrc={inst_logo.src}
                        />
                        <LastUpdated lastUpdated={doctor.instLastUpdatedDate} />
                    </section>
                }
            </section>
            <section className={classes.profiles}>
                {
                    doctor.tgUrl !== '' && doctor.tgSubsCount === '0'
                        &&
                    <SubscriberLink  
                        text="Профиль в Telegram"
                        link={doctor.tgUrl}
                        socialIconSrc={tg_logo.src}
                    />
                }
                {
                    doctor.instUrl !== '' && doctor.instSubsCount === '0'
                        &&
                    <SubscriberLink  
                        text="Профиль в Instagram*"
                        link={doctor.instUrl}
                        socialIconSrc={inst_logo.src}
                    />
                }
                {
                    doctor.vkUrl !== ''
                        &&
                    <SubscriberLink  
                        text="Профиль в VK"
                        link={doctor.vkUrl}
                        socialIconSrc={vk_logo.src}
                    />
                }
                {
                    doctor.dzenUrl !== ''
                        &&
                    <SubscriberLink  
                        text="Профиль в Dzen"
                        link={doctor.dzenUrl}
                        socialIconSrc={dzen_logo.src}
                    />
                }
                {
                    doctor.youtubeUrl !== ''
                        &&
                    <SubscriberLink  
                        text="Профиль в Youtube"
                        link={doctor.youtubeUrl}
                        socialIconSrc={youtube_logo.src}
                    />
                }
                {
                    doctor.siteLink !== ''
                        &&
                    <SubscriberLink  
                        text="Сайт врача"
                        link={doctor.siteLink}
                        socialIconSrc={internet_logo.src}
                    />
                }
            </section>
        </section>
    )
}