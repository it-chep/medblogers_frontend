import {IItem} from "@/src/shared/model/types";


export interface IOfferItemByBrand {
    id: string;
    description: string;
    price: string;
    publicationDate: string;
    cooperationType: IItem;
    socialNetworks: Omit<IBrandSocialNetworkItem, 'link'>[];
}

export interface IBrandData {
    id: string;
    siteLink: string;
    slug: string;
    photo: string;
    title: string;
    description: string;
    about: string;
    socialNetworks: IBrandSocialNetworkItem[];
    businessCategory: IItem;
}

export interface IBrandSocialNetworkItem {
    id: number;
    name: string;
    slug: string;
    link: string;
}

export interface IBrandSeo {
    title: string;
    description: string;
    image: string;
}