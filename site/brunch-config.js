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
                    'vendor/react.min.js',
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
                harmony: true,
                sourceMap: false,
                stripTypes: false
            },
            babel: false
        },
        browserSync: {
            port: 8080,
            logLevel: "debug"
        }
    }
};