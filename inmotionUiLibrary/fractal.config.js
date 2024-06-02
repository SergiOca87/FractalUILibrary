'use strict';

/*
* Require the path module
*/
const path = require('path');

/*
* Theme
*/
const mandelbrot = require('@frctl/mandelbrot');

/*
 * Require the Fractal module
 */
const fractal = module.exports = require('@frctl/fractal').create();

/*
 * Give your project a title.
 */
fractal.set('project.title', 'Inmotion Ui Library');

/*
 * Project Version.
 */
fractal.set('project.version', 'v1.0');

/*
 * Tell Fractal where to look for components.
 */
fractal.components.set('path', path.join(__dirname, 'components'));

/*
 * Tell Fractal where to look for documentation pages.
 */
fractal.docs.set('path', path.join(__dirname, 'docs'));

/*
 * Tell the Fractal web preview plugin where to look for static assets.
 */
//fractal.web.set('static.path', path.join(__dirname, 'public'));

fractal.web.set('static.path', __dirname + '/assets');


fractal.web.theme(
    mandelbrot({
        skin: {
            name: 'fuchsia',
            accent: '#ffcd19',
            complement: '#000',
            links: '#6f8587',
        },
        information: [
            {
                label: 'Version',
                value: require('./package.json').version,
            },
            {
                label: 'Built on',
                value: new Date(),
                type: 'time',
                format: (value) => {
                    return value.toLocaleDateString('en');
                },
            },
        ],
    })
);