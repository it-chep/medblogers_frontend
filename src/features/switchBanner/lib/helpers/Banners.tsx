import {ISwitchBannerItem} from "../../model/types";
import BannerVip from '../assets/BannerVip.png'
import BannerVipMobile from '../assets/BannerVipMobile.png'
import BannerNastav from '../assets/BannerNastav.png'
import BannerNastavNobile from '../assets/BannerNastavMobile.png'
import BannerOffer from '../assets/BannerOffer.jpg'
import BannerOfferMobile from '../assets/BannerOfferMobile.jpg'


export const Banners: ISwitchBannerItem[] = [
    {
        link: 'https://medblogers-base.ru/promotional_offers',
        toSite: true,
        url: BannerOffer.src,
    },
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
        link: 'https://medblogers-base.ru/promotional_offers',
        toSite: true,
        url: BannerOfferMobile.src,
    },
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