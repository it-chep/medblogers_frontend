import {ISwitchBannerItem} from "../../model/types";
import BannerVip from '../assets/BannerVip.png'
import BannerVipMobile from '../assets/BannerVipMobile.png'
import BannerNastav from '../assets/BannerNastav.png'
import BannerNastavNobile from '../assets/BannerNastavMobile.png'

export const Banners: ISwitchBannerItem[] = [
    {
        link: 'https://taplink.cc/readydoc',
        toSite: false,
        url: BannerNastav.src,
    },
    {
        link: 'https://medblogers-base.ru/blogs/vip_card',
        toSite: true,
        url: BannerVip.src
    }
]


export const BannersMobile: ISwitchBannerItem[] = [
    {
        link: 'https://taplink.cc/readydoc',
        toSite: false,
        url: BannerNastavNobile.src,
    },
    {
        link: 'https://medblogers-base.ru/blogs/vip_card',
        toSite: true,
        url: BannerVipMobile.src
    }
]