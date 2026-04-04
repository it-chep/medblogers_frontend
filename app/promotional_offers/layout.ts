import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    absolute: '',
    template: '%s',
  },
  description: '',
  openGraph: {
    title: '',
    description: '',
    images: '',
    url: 'https://medblogers-base.ru/promotional_offers',
    type: 'website'
  },
};

export default function PromotionalOffersLayout({children}: {children: React.ReactNode}) {
  return children;
}