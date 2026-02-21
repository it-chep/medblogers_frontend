import {FC, PropsWithChildren} from "react";
import {SubscriberLink} from "../subscriberLink/SubscriberLink";
import {IDoctor} from "../../model/types";
import classes from './socials.module.scss'
import tg_logo from '@/src/shared/lib/assets/telegram_logo_nobackground.png'
import inst_logo from '@/src/shared/lib/assets/Instagram_icon.png'
import youtube_logo from '@/src/shared/lib/assets/Youtube_logo.png'
import vk_logo from '@/src/shared/lib/assets/vk_logo.png'
import {LastUpdated} from "../lastUpdated/LastUpdated";
import Link from "next/link";
import {MyButton} from "@/src/shared/ui/myButton";

interface IProps {
    doctor: IDoctor;
    vip?: boolean;
}

export const Socials: FC<IProps & PropsWithChildren> = ({doctor, vip = false, children}) => {

    return (
        <section className={classes.socials + (vip ? ` ${classes.vip}` : '')}>
            {
                ((doctor.tgSubsCount || doctor.instSubsCount || doctor.youtubeSubsCount || doctor.vkSubsCount)
                    ||
                (doctor.tgChannelUrl && !doctor.tgSubsCount) || (doctor.instUrl && !doctor.instSubsCount) 
                    || 
                (doctor.youtubeUrl && !doctor.youtubeSubsCount) || (doctor.vkUrl && !doctor.vkSubsCount))
                    &&
                <section className={classes.profiles}>
                    {
                        doctor.tgSubsCount
                            &&
                        <section>
                            <SubscriberLink
                                vip={vip}
                                link={doctor.tgChannelUrl}
                                subsCount={doctor.tgSubsCount}
                                text={doctor.tgSubsCountText}
                                socialIconSrc={tg_logo.src}
                                useA
                            />
                            <LastUpdated vip={vip} lastUpdated={doctor.tgLastUpdatedDate}/>
                        </section>
                    }
                    {
                        doctor.instSubsCount
                            &&
                        <section>
                            <SubscriberLink
                                vip={vip}
                                link={doctor.instUrl}
                                subsCount={doctor.instSubsCount}
                                text={doctor.instSubsCountText}
                                socialIconSrc={inst_logo.src}
                                useA
                            />
                            <LastUpdated vip={vip} lastUpdated={doctor.instLastUpdatedDate}/>
                        </section>
                    }
                    {
                        doctor.youtubeSubsCount
                            &&
                        <section>
                            <SubscriberLink
                                vip={vip}
                                link={doctor.youtubeUrl}
                                subsCount={doctor.youtubeSubsCount}
                                text={doctor.youtubeSubsCountText}
                                socialIconSrc={youtube_logo.src}
                                useA
                            />
                            <LastUpdated vip={vip} lastUpdated={doctor.youtubeLastUpdatedDate}/>
                        </section>
                    }
                    {
                        doctor.vkSubsCount
                            &&
                        <section>
                            <SubscriberLink
                                vip={vip}
                                link={doctor.vkUrl}
                                subsCount={doctor.vkSubsCount}
                                text={doctor.vkSubsCountText}
                                socialIconSrc={vk_logo.src}
                                useA
                            />
                            <LastUpdated vip={vip} lastUpdated={doctor.vkLastUpdatedDate}/>
                        </section>
                    }
                    {
                        doctor.tgChannelUrl && !doctor.tgSubsCount
                            &&
                        <SubscriberLink
                            vip={vip}
                            text="Канал в Telegram"
                            link={doctor.tgChannelUrl}
                            socialIconSrc={tg_logo.src}
                            useA
                        />
                    }
                    {
                        doctor.instUrl && !doctor.instSubsCount
                            &&
                        <SubscriberLink
                            vip={vip}
                            text="Профиль в Instagram*"
                            link={doctor.instUrl}
                            socialIconSrc={inst_logo.src}
                            useA
                        />
                    }
                    {
                        doctor.youtubeUrl && !doctor.youtubeSubsCount
                            &&
                        <SubscriberLink
                            vip={vip}
                            text="Профиль в YouTube"
                            link={doctor.youtubeUrl}
                            socialIconSrc={youtube_logo.src}
                            useA
                        />
                    }
                    {
                        doctor.vkUrl && !doctor.vkSubsCount
                            &&
                        <SubscriberLink
                            vip={vip}
                            text="Профиль сообщества в VK"
                            link={doctor.vkUrl}
                            socialIconSrc={vk_logo.src}
                            useA
                        />
                    }
                </section>
            }
            {children}
            <Link className={classes.link} href={doctor.tgUrl}>
                <MyButton>
                    Написать в ТG
                </MyButton>
            </Link>
        </section>
    )
}