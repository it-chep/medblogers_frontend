import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    absolute: 'Статьи о продвижении медицинских блогов',
    template: '%s | Статьи о продвижении медицинских блогов',
  },
  description: 'Как врачу вести блог и набрать подписчиков в телеграм, инстаграм и других соцсетях',
  openGraph: {
    title: 'Статьи о продвижении медицинских блогов',
    description: 'Как врачу вести блог и набрать подписчиков в телеграм, инстаграм и других соцсетях',
    images: '',
    url: 'https://medblogers-base.ru/blogs',
    type: 'website'
  },
};

export default function BlogsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}