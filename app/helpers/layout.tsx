import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | БАЗА ПОМОЩНИКОВ ДЛЯ ВРАЧЕЙ-БЛОГЕРОВ',
    default: 'БАЗА ПОМОЩНИКОВ ДЛЯ ВРАЧЕЙ-БЛОГЕРОВ - Поиск SMM, дизайнеров, маркетологов и других помощников для ведения медицинского блога', 
  },
  description: 'Поиск SMM, дизайнеров, маркетологов и других помощников для ведения медицинского блога',
  openGraph: {
    title: 'БАЗА ПОМОЩНИКОВ ДЛЯ ВРАЧЕЙ-БЛОГЕРОВ - Поиск SMM, дизайнеров, маркетологов и других помощников для ведения медицинского блога',
    description: 'Поиск SMM, дизайнеров, маркетологов и других помощников для ведения медицинского блога',
    images: 'https://storage.yandexcloud.net/medblogers-photos/seo_helpers.jpeg',
    url: 'https://medblogers-base.ru/helpers',
    type: 'website'
  },
};

export default function HelpersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}