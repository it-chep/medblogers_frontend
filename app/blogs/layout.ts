import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    absolute: '',
    template: '',
  },
  description: '',
  openGraph: {
    title: '',
    description: '',
    images: '',
    url: '',
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