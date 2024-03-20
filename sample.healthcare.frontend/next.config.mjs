/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: 'http://localhost:5274/api/:path*',
            },
        ]
    },
};

export default nextConfig;
