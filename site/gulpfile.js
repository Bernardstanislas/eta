var gulp = require('gulp');
var babelify = require('babelify');
var browserify = require('browserify');
var literalify = require('literalify');
var source = require('vinyl-source-stream');

gulp.task('browserify', function() {
    return browserify({
        entries: ['./src/index.js'],
        extensions: ['jsx'],
        standalone: 'ETA'
    })
        .transform({
            global: true
        }, literalify.configure({
            react: 'window.React'
        }))
        .transform(babelify)
        .bundle()
        .pipe(source('eta.js'))
        .pipe(gulp.dest('./web'));
});