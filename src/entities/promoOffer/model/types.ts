
export interface IItem {
    id: string;
    name: string;
}

export interface IPromoOfferCategory {
    id: string;
    name: string;
    offersCount: string;
}

interface ISocialNetworkItem {
    id: number;
    name: string;
    slug: string;
}

export interface IPromoOfferItem {
    id: string;
    photo: string;
    title: string;
    brandDescription: string;
    cooperationType: IItem ;
    description: string;
    socialNetworks: ISocialNetworkItem[];
    businessCategory: IItem;
    createdAt: string;
}

export interface IPromoOfferData {
    description: string;
    cooperationType: IItem;
    price: string;
    socialNetworks: ISocialNetworkItem[];
    createdAt: string;
}

export interface IPromoOfferSeo {
    title: string;
    description: string;
    image: string;
}