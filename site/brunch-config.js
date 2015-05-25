exports.config = {
    sourceMaps: false,
    paths: {
        public: 'web'
    },
    files: {
        javascripts: {
            joinTo: {
                'javascripts/app.js': /^app/,
                'javascripts/vendor.js': /^(bower_components|vendor)/
            },
            order: {
                before: [
                    'vendor/react.js',
                    'vendor/jquery.js',
                    'vendor/lodash.js',
                    'vendor/backbone.js',
                    'vendor/focus.js',
                    'vendor/focus-components.js'
                ],
                after: []
            }
        },
        stylesheets: {
            joinTo: 'stylesheets/app.css'
        },
        templates: {
            joinTo: 'javascripts/app.js'
        }
    },
    plugins: {
        babel: {
            ignore: [/^(bower_components|vendor)/,
                'app/legacyES5Code/**/*'],
            pattern: /\.(es6|jsx|js)$/
        },
        uglify: {
            mangle: false,
            compress: {
                global_defs: {
                    DEBUG: false
                }
            }
        },
        cleancss: {
            keepSpecialComments: 0,
            removeEmpty: true
        },
        react: {
            transformOptions: {
                sourceMap: false,
            },
            babel: true
        },
        browserSync: {
            port: 8080,
            logLevel: "debug"
        }
    }
};