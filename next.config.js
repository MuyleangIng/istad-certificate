const withPWA = require('next-pwa')({
    dest: 'public'
})
/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "standalone",
    images:{
        remotePatterns: [
            {
                hostname: "188.166.229.56"
            },
            {
                hostname: "api.istad.co"
            },
            {
                hostname: "verify.istad.co"
            },
            {
                hostname: "www.istad.co"
            },
            {
                hostname: "https://www.istad.co/"
            },
            {
                hostname: "istad.co"
            }

        ]
    },
    webpack5: true,
    webpack: (config) => {
        config.resolve.fallback = { fs: false };

        return config;
    }
};

// module.exports = nextConfig;
module.exports = withPWA(
    nextConfig
);