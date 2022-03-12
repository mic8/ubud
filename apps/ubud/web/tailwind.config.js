const { join } = require('path');

module.exports = {
    content: [
        join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
        join(__dirname, '../../../libs/element/common/**/!(*.stories|*.spec).{ts,html}')
    ],
    theme: {
        screens: {
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
                    400: '#9CA1A6',
                    500: '#838990',
                    600: '#6C727F',
                    DEFAULT: '#6C727F',
                    700: '#39434D',
                    800: '#081421',
                    dark: '#081421',
                },
                primary: {
                    light: '#F5FAFE',
                    DEFAULT: '#339AF0',
                    dark: '#1f5b8f',
                },
                secondary: {
                    light: '#f5fefb',
                    DEFAULT: '#33f0be',
                    dark: '#1f8f68',
                }
            }
        },
    },
    plugins: [],
};
