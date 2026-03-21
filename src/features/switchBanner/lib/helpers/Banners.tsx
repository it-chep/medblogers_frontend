import { ISwitchBannerItem } from "../../model/types";

import Banner10 from '../assets/Banner10.png'
import Banner10Mobile from '../assets/Banner10Mobile.png'
import BannerVip from '../assets/BannerVip.png'
import BannerVipMobile from '../assets/BannerVipMobile.png'

export const Banners: ISwitchBannerItem[] = [
    {
        link: 'http://localhost:3000/blogs',
        toSite: true,
        url: Banner10.src
    },
    {
        url: BannerVip.src
    },
]


export const BannersMobile: ISwitchBannerItem[] = [
    {
        link: 'http://localhost:3000/blogs',
        toSite: true,
        url: Banner10Mobile.src
    },
    {
        url: BannerVipMobile.src
    },
]