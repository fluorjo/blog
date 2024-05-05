
/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
      },

    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'vyfkwfwikstziyoxdiap.supabase.co',
                port: '',
                pathname: '/storage/v1/object/public/**',
            },
        ],
    },
};
//
export default nextConfig;
