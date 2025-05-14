/** @type {import('next').NextConfig} */
import dotenv from 'dotenv';
dotenv.config({ path: '../../.env' });
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'avatars.githubusercontent.com',
                port: '',
                pathname: '/u/**',
            },
            {
                protocol: 'https',
                hostname: 'lh3.googleusercontent.com',
                port: '',
                pathname: '/a/**',
            },
        ]
    },
};

export default nextConfig;
