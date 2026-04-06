import { IMenu } from "../../model/types";

export const menuLinks: IMenu[] = [
    {
        title: 'Базы',
        subTitles: [
            {
                title: 'База врачей-блогеров',
                link: '/'
            },
            {
                title: 'База помощников',
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
                title: 'Что такое MEDBLOGERS?',
                link: 'https://medblogers.ru/',
                offSite: true,
            },
            {
                title: '👑 VIP-размещение',
                link: '/blogs/vip_card',
            },
            {
                title: 'Рейтинг врачей Medblogers',
                link: '/rating',
            }
        ]
    },
]
