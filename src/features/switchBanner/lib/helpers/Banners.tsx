import {ISwitchBannerItem} from "../../model/types";

import Banner10 from '../assets/Banner10.png'
import Banner10Mobile from '../assets/Banner10Mobile.png'
import BannerVip from '../assets/BannerVip.png'
import BannerVipMobile from '../assets/BannerVipMobile.png'
import BannerNastav from '../assets/BannerNastav.png'
import BannerNastavNobile from '../assets/BannerNastavMobile.png'

export const Banners: ISwitchBannerItem[] = [
    {
        url: Banner10.src
    },
    {
        link: 'https://medblogers-base.ru/blogs/vip_card',
        toSite: true,
        url: BannerVip.src
    },
    {
        link: 'https://medbloging.ru/',
        toSite: false,
        url: BannerNastav.src,
    }
]


export const BannersMobile: ISwitchBannerItem[] = [
    {
        url: Banner10Mobile.src
    },
    {
        link: 'https://medblogers-base.ru/blogs/vip_card',
        toSite: true,
        url: BannerVipMobile.src
    },
    {
        link: 'https://medbloging.ru/',
        toSite: false,
        url: BannerNastavNobile.src,
    }
]