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
    type: 'website'
  },
};

export default function BrandsLayout({children}: {children: React.ReactNode}) {
  return children;
}