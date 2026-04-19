/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                canvas: '#f8fafc',
                surface: '#ffffff',
                ink: '#0f172a',
                muted: '#475569',
                brand: {
                    50: '#eff6ff',
                    100: '#dbeafe',
                    200: '#bfdbfe',
                    600: '#2563eb',
                    700: '#1d4ed8',
                },
            },
            boxShadow: {
                card: '0 18px 45px rgba(15, 23, 42, 0.08)',
            },

            animation: {
                blob: 'blob 7s infinite ease',
            },
            keyframes: {
                blob: {
                    '0%': {
                        transform: 'translate(0px, 0px) scale(1)',
                    },
                    '33%': {
                        transform: 'translate(30px, -50px) scale(1.1)',
                    },
                    '66%': {
                        transform: 'translate(-20px, 20px) scale(0.9)',
                    },
                    '100%': {
                        transform: 'translate(0px, 0px) scale(1)',
                    },
                },
            },
        },
    },
    plugins: [],
};
