import { StaticImageData } from "next/image";
import FreelancerSvg from '../../lib/assets/Freelancer.svg'
import PromoOffersSvg from '../../lib/assets/PromoOffers.svg'
import BlogsSvg from '../../lib/assets/Blogs.svg'
import BlackListSvg from '../../lib/assets/BlackList.svg'
import RatingSvg from '../../lib/assets/Rating.svg'
import DoctorsSvg from '../../lib/assets/Doctors.svg'

type THomeNav = {
    name: string;
    svg: string | StaticImageData,
    href: string;
    width?: number; // width name
}

export const homeNavs: THomeNav[] = [
    {
        name: 'База врачей',
        href: '/',
        svg: DoctorsSvg,
        width: 80
    },
    {
        name: 'База помощников',
        href: '/helpers',
        svg: FreelancerSvg,
        width: 94
    },
    {
        name: 'Рекламные предложения',
        href: '/promotional_offers',
        svg: PromoOffersSvg,
        width: 104
    },
    {
        name: 'Статьи',
        href: '/blogs',
        svg: BlogsSvg,
        width: 70
    },
    {
        name: 'Расстрельный список каналов',
        href: '/blacklist',
        svg: BlackListSvg,
        width: 132
    },
    {
        name: 'Рейтинг врачей',
        href: '/rating',
        svg: RatingSvg,
        width: 104
    },
] 
