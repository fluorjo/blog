import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './stories/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        screens: {
            lg: '780px',
        },
        container: {
            center: true,
            padding: '16px',
        },
        extend: {
            backgroundImage: {},
        },
    },
    daisyui: {
      themes: ["lofi", "dark", "cmyk"],
    },
    plugins: [require('daisyui')],
};
export default config;
