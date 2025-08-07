import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        domains: [
            'medblogers-photos.storage.yandexcloud.net', // Ваш домен
            'other-allowed-domain.com' // Другие домены, если есть
        ],
    },
};

export default nextConfig;
