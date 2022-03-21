const { join } = require('path');

module.exports = {
    content: [
        join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
        join(__dirname, '../../../libs/element/common/**/!(*.stories|*.spec).{ts,html}')
    ],
    theme: {
        colors: {
            'blue' : '#0d47a1',
            'active' : 'rgba(255,255,255,.15)'
        },
        fontFamily: {
            'custom' : ['Roboto','Helvetica Neue Light','Helvetica Neue','Helvetica','Arial','Lucida Grande','sans-serif']
        },
        extend: {},
    },
    plugins: [],
};
