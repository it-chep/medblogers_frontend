import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    absolute: 'Расстрельный список Telegram-каналов — проверка на накрутки | MEDBLOGERS BASE',
  },
  description: 'Проверьте Telegram-канал перед покупкой рекламы. Расстрельный список каналов с накрутками подписчиков и ботами. Ежедневное обновление базы. Бесплатная проверка от MEDBLOGERS BASE.',
  openGraph: {
    title: 'Расстрельный список Telegram-каналов — проверка на накрутки | MEDBLOGERS BASE',
    description: 'Проверьте Telegram-канал перед покупкой рекламы. Расстрельный список каналов с накрутками и ботами. Бесплатная проверка от MEDBLOGERS BASE.',
    // images: '',
    url: 'https://medblogers-base.ru/blacklist',
    type: 'website'
  },
};

export default function BlacklistLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}