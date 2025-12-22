import { FC } from "react";
import { IDoctor } from "../../model/types";
import { SubscriberLink } from "../subscriberLink/SubscriberLink";
import dzen_logo from '@/src/shared/lib/assets/dzen_logo.png'
import youtube_logo from '@/src/shared/lib/assets/Youtube_logo.png'
import internet_logo from '@/src/shared/lib/assets/internet.svg'
import tiktok_logo from '@/src/shared/lib/assets/tiktok_logo.svg'
import vk_logo from '@/src/shared/lib/assets/vk_logo.png'

interface IProps {
    doctor: IDoctor;
}

export const OtherSocial: FC<IProps> = ({doctor}) => {

    return (
        (doctor.vkUrl || doctor.dzenUrl || doctor.youtubeUrl || doctor.tiktokUrl || doctor.siteLink)
            ?
        <>
            {
                doctor.vkUrl
                    &&
                <SubscriberLink
                    text="Профиль в VK"
                    link={doctor.vkUrl}
                    socialIconSrc={vk_logo.src}
                />
            }
            {
                doctor.dzenUrl
                    &&
                <SubscriberLink  
                    text="Профиль в Dzen"
                    link={doctor.dzenUrl}
                    socialIconSrc={dzen_logo.src}
                />
            }
            {
                doctor.tiktokUrl
                    &&
                <SubscriberLink  
                    text="Профиль в Tiktok"
                    link={doctor.tiktokUrl}
                    socialIconSrc={tiktok_logo.src}
                />
            }
            {
                doctor.siteLink
                    &&
                <SubscriberLink  
                    text="Сайт врача"
                    link={doctor.siteLink}
                    socialIconSrc={internet_logo.src}
                />
            }
        </>
            :
        <></>
    )
}