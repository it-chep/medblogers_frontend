import { FC } from "react";
import { SubscriberLink } from "../subscriberLink/SubscriberLink";
import classes from './subscriberLinkBadges.module.scss'
import { IDoctorMiniature } from "../../model/types";
import tg_logo from '@/src/shared/lib/assets/telegram_logo_nobackground.png'
import inst_logo from '@/src/shared/lib/assets/Instagram_icon.png'
import youtube_logo from '@/src/shared/lib/assets/Youtube_logo.png'
import vk_logo from '@/src/shared/lib/assets/vk_logo.png'

type Subs = {
    tgSubsCount: string;
    tgLink: string;
    instSubsCount: string;
    instLink: string;
    youtubeSubsCount: string;
    youtubeLink: string;
    vkSubsCount: string;
    vkLink: string;
}

interface IProps {
    doctorLinks: Subs;
    vip?: boolean;
}

export const SubscriberLinkBadges: FC<IProps> = ({doctorLinks: doctor, vip = false}) => {


    return (
        <>
            <section className={classes.sign + (vip ? ` ${classes.vip}` : '')}>
                Количество подписчиков в соц. сетях:
            </section>
            <section className={classes.subscribersWrapper + (vip ? ` ${classes.vip}` : '')}>
                {
                    doctor.tgSubsCount
                        &&
                    <SubscriberLink
                        link={doctor.tgLink}
                        socialIconSrc={tg_logo.src}
                        subsCount={doctor.tgSubsCount}
                        text={''}
                        useA={false} // убираем вложенность тега a
                        fontSize={14}
                        vip={vip}
                    />
                }
                {
                    doctor.instSubsCount
                        &&
                    <SubscriberLink
                        link={doctor.instLink}
                        socialIconSrc={inst_logo.src}
                        subsCount={doctor.instSubsCount}
                        text={''}
                        useA={false}
                        fontSize={14}
                        vip={vip}
                    />
                }
                {
                    doctor.youtubeSubsCount
                        &&
                    <SubscriberLink
                        link={doctor.youtubeLink}
                        socialIconSrc={youtube_logo.src}
                        subsCount={doctor.youtubeSubsCount}
                        text={''}
                        useA={false}
                        fontSize={14}
                        vip={vip}
                    />
                }
                {
                    doctor.vkSubsCount
                        &&
                    <SubscriberLink
                        link={doctor.vkLink}
                        socialIconSrc={vk_logo.src}
                        subsCount={doctor.vkSubsCount}
                        text={''}
                        useA={false}
                        fontSize={14}
                        vip={vip}
                    />
                }
            </section>
        </>
    )
}