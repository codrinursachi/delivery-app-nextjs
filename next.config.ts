import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "images.ctfassets.net",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "cdn.wolt.com",
                pathname: "/**",
            },
        ],
    },
};

export default nextConfig;
