const { createGlobPatternsForDependencies } = require('@nrwl/angular/tailwind');
const { join } = require('path');

module.exports = {
    content: [
        join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
        join(__dirname, '../../../libs/element/common/**/!(*.stories|*.spec).{ts,html}')
    ],
    theme: {
        extend: {},
    },
    plugins: [],
};
