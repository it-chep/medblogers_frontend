

export interface IMenu {
    title: string;
    subTitles?: IMenu[];
    link?: string;
    offSite?: boolean;  // ссылка вне сайта 
}