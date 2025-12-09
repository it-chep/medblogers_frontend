  
  
  
export interface IBlogMiniature {
    title: string;
    slug: string;
    previewText: string;
    createdAt: string;
    photoLink: string;
}


export interface IBlogDetail{

    code?: number;

    title: string;
    slug: string;
    body: string;
    previewText: string;
    societyPreview: string;
    additionalSeoText: string;
    createdAt: string;
    photoLink: string;
}