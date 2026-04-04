import { IMenu } from "../../model/types";

export const menuLinks: IMenu[] = [
    {
        title: 'Базы',
        subTitles: [
            {
                title: 'База врачей',
                link: '/'
            },
            {
                title: 'База фрилансеров',
                link: '/helpers',
            }
        ]
    },
    {
        title: 'Статьи',
        link: '/blogs',
    },   
    {
        title: 'Расстрельный список',
        link: '/blacklist',
    }, 
    {
        title: 'Рекламные предложения',
        link: '/promotional_offers',
    }, 
    {
        title: 'Инструкции',
        subTitles: [
            {
                title: 'Что такое MEDBLOGERS?',
                link: 'https://medblogers.ru/',
                offSite: true,
            },
            {
                title: 'База врачей - как пользоваться?',
                link: '/blogs/base',
            },
            {
                title: 'База помощников - инструкция для рационального выбора подрядчика',
                link: '/blogs/freelancers',
            }
        ]
    },
    {
        title: 'Еще',
        subTitles: [
            {
                title: '👑 VIP-размещение',
                link: '/blogs/vip_card',
            },
            {
                title: 'Расстрельный список каналов',
                link: '/blacklist',
            },
            {
                title: 'Рейтинг врачей Medblogers',
                link: '/rating',
            }
        ]
    },
]
