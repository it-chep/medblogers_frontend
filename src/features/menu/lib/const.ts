import { IMenu } from "../model/types";

export const menuLinks: IMenu[] = [
    {
        name: 'Что такое MEDBLOGERS?',
        link: 'https://medblogers.ru/'
    },
    {
        name: 'Связаться с техподдержкой и задать вопрос',
        link: 'https://t.me/readydog'
    },
    {
        name: 'База врачей - как пользоваться?',
        link: 'https://medblogers-base.ru/blogs/base',
        site: true,
    },
    {
        name: 'База помощников - инструкция для рационального выбора подрядчика',
        link: 'https://medblogers-base.ru/blogs/freelancers',
        site: true,
    },
    {
        name: 'Полезные статьи для медблога',
        link: '/blogs',
        site: true,
    },
    {
        name: '👑 VIP-размещение',
        link: '/blogs/vip_card',
        site: true,
    },
    {
        name: 'Расстрельный список каналов',
        link: "/blacklist",
        site: true,
    },
    {
        name: 'Рейтинг врачей Medblogers',
        link: "/rating",
        site: true,
    },
]
