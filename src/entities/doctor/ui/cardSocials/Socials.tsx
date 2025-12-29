import {FC, PropsWithChildren} from "react";
import {SubscriberLink} from "../subscriberLink/SubscriberLink";
import {IDoctor} from "../../model/types";
import classes from './socials.module.scss'
import tg_logo from '@/src/shared/lib/assets/telegram_logo_nobackground.png'
import inst_logo from '@/src/shared/lib/assets/Instagram_icon.png'
import youtube_logo from '@/src/shared/lib/assets/Youtube_logo.png'
import {LastUpdated} from "../lastUpdated/LastUpdated";
import Link from "next/link";
import {MyButton} from "@/src/shared/ui/myButton";

interface IProps {
    doctor: IDoctor;
}

export const Socials: FC<IProps & PropsWithChildren> = ({doctor, children}) => {

    return (
        <section className={classes.socials}>
            {
                ((doctor.tgSubsCount || doctor.instSubsCount || doctor.youtubeSubsCountText)
                    ||
                (doctor.tgChannelUrl && !doctor.tgSubsCount) || (doctor.instUrl && !doctor.instSubsCount) || (doctor.youtubeUrl && !doctor.youtubeSubsCount))
                    &&
                <section className={classes.profiles}>
                    {
                        doctor.tgSubsCount
                            &&
                        <section>
                            <SubscriberLink
                                link={doctor.tgChannelUrl}
                                subsCount={doctor.tgSubsCount}
                                text={doctor.tgSubsCountText}
                                socialIconSrc={tg_logo.src}
                                useA
                            />
                            <LastUpdated lastUpdated={doctor.tgLastUpdatedDate}/>
                        </section>
                    }
                    {
                        doctor.instSubsCount
                            &&
                        <section>
                            <SubscriberLink
                                link={doctor.instUrl}
                                subsCount={doctor.instSubsCount}
                                text={doctor.instSubsCountText}
                                socialIconSrc={inst_logo.src}
                                useA
                            />
                            <LastUpdated lastUpdated={doctor.instLastUpdatedDate}/>
                        </section>
                    }
                    {
                        doctor.youtubeSubsCount
                            &&
                        <section>
                            <SubscriberLink
                                link={doctor.youtubeUrl}
                                subsCount={doctor.youtubeSubsCount}
                                text={doctor.youtubeSubsCountText}
                                socialIconSrc={youtube_logo.src}
                                useA
                            />
                            <LastUpdated lastUpdated={doctor.youtubeLastUpdatedDate}/>
                        </section>
                    }
                    {
                        doctor.tgChannelUrl && !doctor.tgSubsCount
                            &&
                        <SubscriberLink
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
                            text="Профиль в YouTube"
                            link={doctor.youtubeUrl}
                            socialIconSrc={youtube_logo.src}
                            useA
                        />
                    }
                </section>
            }
            {children}
            <Link className={classes.link} href={doctor.tgUrl}>
                <MyButton>
                    Связаться
                </MyButton>
            </Link>
        </section>
    )
}