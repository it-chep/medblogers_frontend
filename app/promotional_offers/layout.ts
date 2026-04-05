import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    absolute: 'Рекламные предложения для врачей-блогеров',
    template: '%s',
  },
  description: 'Объявления по сотрудничеству от медицинских брендов: клиники, онлайн-школы, фарма и т.д.',
  openGraph: {
    title: 'Рекламные предложения для врачей-блогеров',
    description: 'Объявления по сотрудничеству от медицинских брендов: клиники, онлайн-школы, фарма и т.д.',
    images: '',
    url: 'https://medblogers-base.ru/promotional_offers',
    type: 'website'
  },
};

export default function PromotionalOffersLayout({children}: {children: React.ReactNode}) {
  return children;
}