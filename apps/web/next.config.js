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
            }
        ]
    }
};

export default nextConfig;
