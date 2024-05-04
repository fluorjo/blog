import removeImports from 'next-remove-imports';

export default removeImports({

    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'paxswvxczoiubquzfirr.supabase.co',
                port: '',
                pathname: '/storage/v1/object/public/**',
            },
        ],
    },
})
