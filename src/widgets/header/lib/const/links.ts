import { IMenu } from "../../model/types";

export const menuLinks: IMenu[] = [
    {
        name: 'База врачей',
        link: '/',
        site: true,
    },
    {
        name: 'База фрилансеров',
        link: '/helpers',
        site: true,
    }, 
    {
        name: 'Статьи',
        link: '/blogs',
        site: true,
    },   
    {
        name: 'Расстрельный список',
        link: '/blacklist',
        site: true,
    }, 
    // {
    //     name: 'Залетные рилсы',
    //     link: 'https://medblogers.ru/',
    //     site: true,
    // }, 
    {
        name: 'Рекламные предложения',
        link: '/promotional_offers',
        site: true,
    }, 
]
