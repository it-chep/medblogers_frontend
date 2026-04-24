import { StaticImageData } from "next/image";
import Freelancer from '../../lib/assets/Freelancer.webp'
import PromoOffers from '../../lib/assets/PromoOffers.webp'
import Blogs from '../../lib/assets/Blogs.webp'
import BlackList from '../../lib/assets/BlackList.webp'
import Rating from '../../lib/assets/Rating.webp'
import Doctors from '../../lib/assets/Doctors.webp'
import Placement from '../../lib/assets/Placement.webp'

export type THomeNav = {
    name: string;
    url: string,
    href: string;
    width?: number; // width name
}

export const homeNavs: THomeNav[] = [
    {
        name: 'Размещение в базе',
        href: '/welcome',
        url: Placement.src,
        width: 100
    },
    {
        name: 'База врачей',
        href: '/',
        url: Doctors.src,
        width: 80
    },
    {
        name: 'База помощников',
        href: '/helpers',
        url: Freelancer.src,
        width: 94
    },
    {
        name: 'Рекламные предложения',
        href: '/promotional_offers',
        url: PromoOffers.src,
        width: 104
    },
    {
        name: 'Статьи',
        href: '/blogs',
        url: Blogs.src,
        width: 70
    },
    {
        name: 'Расстрельный список каналов',
        href: '/blacklist',
        url: BlackList.src,
        width: 132
    },
    {
        name: 'Рейтинг врачей',
        href: '/rating',
        url: Rating.src,
        width: 104
    },
] 
