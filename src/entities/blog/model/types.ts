

export interface IBlogDoctor {
    name: string;
    slug: string;
    image: string;
    specialityName: string; 
}

export interface IBlogCategory {
    id: string;
    name: string;
    fontColor: string;
    bgColor: string; 
    blogsCount: number;
}
  
export interface IBlogMiniature {
    title: string;
    slug: string;
    previewText: string;
    createdAt: string;
    photoLink: string;
    categories: IBlogCategory[];
}

export interface IBlogDetail {

    code?: number;

    title: string;
    slug: string;
    body: string;
    previewText: string;
    societyPreview: string;
    additionalSeoText: string;
    createdAt: string;
    photoLink: string;

    doctor: IBlogDoctor;
    categories: IBlogCategory[];
}