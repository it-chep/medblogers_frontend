import { IBlogDetail } from "../../model/types";


export const getBlogJsonLd = (blog: IBlogDetail) => ({
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `https://medblogers-base.ru/blogs/${blog.slug}`,
    },
    headline: blog.title,
    description: blog.previewText,
    image: blog.photoLink,
    author: blog.doctor?.name
        ? {
            "@type": "Person",
            name: blog.doctor.name,
            url: `https://medblogers-base.ru/doctors/${blog.doctor.slug}`,
        }
        : undefined,
    publisher: {
        "@type": "Organization",
        name: "medblogers-base.ru",
        logo: {
            "@type": "ImageObject",
            url: "https://storage.yandexcloud.net/medblogers-photos/medblogers_logo.webp",
        },
    },
    datePublished: blog.createdAt,
})