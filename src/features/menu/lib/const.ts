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
        link: 'https://medblogers-base.ru/blogs/base'
    },
    {
        name: 'База помощников - инструкция для рационального выбора подрядчика',
        link: 'https://medblogers-base.ru/blogs/freelancers'
    },
    {
        name: 'Полезные статьи для медблога',
        link: '/blogs',
        site: true,
    },
    {
        name: 'Расстрельный список каналов',
        link: "/blacklist",
        site: true,
    }
]
