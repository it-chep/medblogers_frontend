import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        domains: [
            'medblogers-photos.storage.yandexcloud.net',
            'storage.yandexcloud.net'
        ],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'storage.yandexcloud.net',
            },
            {
                protocol: 'https',
                hostname: 'medblogers-photos.storage.yandexcloud.net'
            }
        ],
        
    },
};

export default nextConfig;
