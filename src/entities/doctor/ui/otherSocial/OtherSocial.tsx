import { FC } from "react";
import { IDoctor } from "../../model/types";
import { SubscriberLink } from "../subscriberLink/SubscriberLink";
import dzen_logo from '@/src/shared/lib/assets/dzen_logo.png'
import internet_logo from '@/src/shared/lib/assets/internet.svg'
import tiktok_logo from '@/src/shared/lib/assets/tiktok_logo.svg'

interface IProps {
    doctor: IDoctor;
    isVip?: boolean;
}

export const OtherSocial: FC<IProps> = ({doctor, isVip = false}) => {

    return (
        (doctor.dzenUrl || doctor.tiktokUrl)
            ?
        <>
            {
                doctor.dzenUrl
                    &&
                <SubscriberLink  
                    text="Профиль в Dzen"
                    link={doctor.dzenUrl}
                    socialIconSrc={dzen_logo.src}
                    useA
                    vip={isVip}
                />
            }
            {
                doctor.tiktokUrl
                    &&
                <SubscriberLink  
                    text="Профиль в Tiktok"
                    link={doctor.tiktokUrl}
                    socialIconSrc={tiktok_logo.src}
                    useA
                    vip={isVip}
                />
            }
        </>
            :
        <></>
    )
}