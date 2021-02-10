module.exports = {
    purge: [
        './src/pages/**/*.{js,ts,jsx,tsx}',
        './src/containers/**/*.{js,ts,jsx,tsx}',
        './src/components/**/*.{js,ts,jsx,tsx}',
    ],
    darkMode: false,
    theme: {
        extend: {
            colors: {
                background: {
                    DEFAULT: '#FEF9F5',
                },
                primary: {
                    DEFAULT: '#A9693A',
                },
                gray: {
                    DEFAULT: '#2D2A2A',
                },
            },
            boxShadow: {
                header: '0px 14px 60px -20px rgba(60, 31, 10, 0.08)',
            },
            fontFamily: {
                'sans': ['Tisa Sans Pro', 'sans-serif'],
                'serif': ['Silk Serif', 'sans-serif'],
            },
            borderRadius: {
                half: '50%',
            },
            height: {
                '2-px': '2px',
            }
        }
    },
    variants: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/aspect-ratio'),
    ],
}
