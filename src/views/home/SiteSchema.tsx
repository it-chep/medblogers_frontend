// components/MySiteSchema.tsx
import Script from 'next/script'

export default function MySiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      // 1. Весь сайт
      {
        "@type": "WebSite",
        "@id": "https://medblogers-base.ru/#website",
        "name": "MEDBLOGERS BASE - Единая база врачей-блогеров",
        "description": "Открытый реестр докторов для поиска рекламы и коллабораций. База медицинских блогеров, SMM-специалистов и проверка каналов.",
        "url": "https://medblogers-base.ru",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://medblogers-base.ru/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },
      
      // 2. Основная страница
      {
        "@type": "WebPage",
        "@id": "https://medblogers-base.ru/#webpage",
        "name": "MEDBLOGERS BASE - Главная страница",
        "url": "https://medblogers-base.ru",
        "isPartOf": { "@id": "https://medblogers-base.ru/#website" }
      },
      
      // 3. SiteNavigationElement для трех навигационных элементов
      {
        "@type": "SiteNavigationElement",
        "@id": "https://medblogers-base.ru/#nav-helpers",
        "name": "База помощников",
        "url": "https://medblogers-base.ru/helpers",
        "description": "Поиск SMM, дизайнеров, маркетологов для медицинского блога",
        "isPartOf": { "@id": "https://medblogers-base.ru/#website" }
      },
      {
        "@type": "SiteNavigationElement",
        "@id": "https://medblogers-base.ru/#nav-blogs",
        "name": "Полезные статьи для медблога",
        "url": "https://medblogers-base.ru/blogs",
        "description": "Как врачу вести блог и набрать подписчиков в Telegram, Instagram",
        "isPartOf": { "@id": "https://medblogers-base.ru/#website" }
      },
      {
        "@type": "SiteNavigationElement",
        "@id": "https://medblogers-base.ru/#nav-blacklist",
        "name": "Расстрельный список каналов",
        "url": "https://medblogers-base.ru/#blacklist",
        "description": "Проверка каналов на накрутку и недобросовестную рекламу",
        "isPartOf": { "@id": "https://medblogers-base.ru/#website" }
      }
    ]
  }

  return (
    <Script
      id="my-site-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema)
      }}
    />
  )
}