const { join } = require('path');

module.exports = {
    content: [
        join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
        join(__dirname, '../../../libs/element/common/**/!(*.stories|*.spec).{ts,html}'),
        join(__dirname, '../../../libs/element/todo/**/!(*.stories|*.spec).{ts,html}')
    ],
    theme: {
        screens: {
            xs: '360px',
            sm: '640px',
            md: '992px',
            lg: '1024px',
            xl: '1200px',
        },
        container: {
            center: true,
            padding: {
                DEFAULT: '1.25rem',
                lg: '0rem',
            }
        },
        extend: {
            colors: {
                blank: {
                    100: 'rgba(255, 255, 255, 0.1)',
                    200: 'rgba(255, 255, 255, 0.2)',
                    300: 'rgba(255, 255, 255, 0.3)',
                    400: 'rgba(255, 255, 255, 0.4)',
                    500: 'rgba(255, 255, 255, 0.5)',
                    DEFAULT: '#ffffff',
                    600: 'rgba(255, 255, 255, 0.6)',
                    700: 'rgba(255, 255, 255, 0.7)',
                    800: 'rgba(255, 255, 255, 0.8)',
                    900: 'rgba(255, 255, 255, 0.9)',
                },
                grey: {
                    50: '#F9FAFB',
                    100: '#F3F4F6',
                    200: '#E4E7EA',
                    light: '#E4E7EA',
                    300: '#D3D5DA',
                    400: '#9DA4AE',
                    500: '#6C727F',
                    DEFAULT: '#6C727F',
                    600: '#394150',
                    700: '#111826',
                    dark: '#111826',
                },
                primary: {
                    light: '#F7F9FE',
                    DEFAULT: '#1E40AF',
                    dark: '#08287D',
                },
                secondary: {
                    light: '#e0fdfb',
                    DEFAULT: '#09B8A7',
                    dark: '#04645b',
                },
                success: {
                    light: '#E4F1E9',
                    DEFAULT: '#107E1B',
                    dark: '#036407',
                },
                warning: {
                    light: '#FFF4CE',
                    DEFAULT: '#fcca4b',
                    dark: '#C38D00',
                },
                danger: {
                    light: '#FEF5F5',
                    DEFAULT: '#F43F5E',
                    dark: '#802020',
                },
                orange: {
                    light: '#FFFAF4',
                    DEFAULT: '#F97317',
                    dark: '#884f1a',
                },
                accent: {
                    blue: '#226DA8',
                    orange: '#F97317',
                    red: '#F43F5E',
                    green: '#049769',
                    yellow: '#F59E0B',
                    purple: '#8B5CF6',
                    brown: '#805D05',
                    'soft-yellow': '#FFEDC0',
                    'soft-green': '#E6F5F0',
                    skillhub: '#1E40AF',
                    karirhub: '#339AF0',
                    sertihub: '#F03E3E',
                    bizhub: '#6741D9',
                },
            },
            backgroundSize: {
                '50%': '50%',
                '45%': '45%',
            },
            fontFamily: {
                sans: ['Inter', 'Helvetica', 'system-ui', 'sans-serif'],
            },
            fontSize: {
                '2xs': ['.625rem', 'auto'],
                xs: ['.75rem', 'auto'],
                sm: ['.875rem', '140%'],
                base: ['1rem', '140%'],
                lg: ['1.25rem', '120%'],
                xl: ['1.5rem', '120%'],
                '2xl': ['2rem', '120%'],
                '3xl': ['2.5rem', '120%'],
            },
            spacing: {
                '9.5': '2.375rem',
                '4.5': '1.125rem',
                '5.5': '1.375rem',
                '18' : '4.5rem',
                '25' : '6.25rem',
                '30' : '7.5rem',
                '31' : '7.75rem',
                '33' : '8.25rem',
                '35' : '8.75rem',
                '39' : '9.75rem',
                '41' : '10.25rem',
                '45' : '11.25rem',
                'text-xs': '280px',
                'text-sm': '340px',
                'text-md': '481px',
                'text-lg': '584px',
                'text-xl': '790px',
                '-full': '-100%',
                'full': '100%',
            },
            maxWidth: {
                '20': '5rem',
                '55': '13rem',
                '64': '16rem',
                '80': '20rem',
                'text-xs': '280px',
                'text-sm': '340px',
                'text-md': '481px',
                'text-lg': '584px',
                'text-xl': '790px',
            },
            minWidth: {
                'lg': '32rem',
                '2/12': '16.667%',
                'text-xs': '280px',
                'text-sm': '340px',
                'text-md': '481px',
                'text-lg': '553px',
                'text-xl': '790px',
            },
            zIndex: {
                '-1': '-1',
            },
        },
    },
    important: true,
    plugins: [
        function ({ addComponents }) {
            addComponents({
                '.container': {
                    maxWidth: '100%',
                    '@screen lg': {
                        maxWidth: '960px',
                    },
                    '@screen xl': {
                        maxWidth: '1128px',
                    },
                }
            })
        },
    ]
};
