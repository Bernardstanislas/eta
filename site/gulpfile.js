var gulp = require('gulp');
var babelify = require('babelify');
var reactify = require('reactify');
var browserify = require('browserify');
var literalify = require('literalify');
var source = require('vinyl-source-stream');

var baseDestination = './web';
var jsDestination = baseDestination + '/javascripts';

gulp.task('browserify-src', function() {
    return browserify({
        entries: ['./index.js'],
        basedir: 'src',
        extensions: ['js', 'jsx'],
        standalone: 'ETA'
    })
    .transform([babelify, reactify])
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest(jsDestination));
});

gulp.task('browserify-vendor', function() {
    return browserify('src/vendor.js')
    .bundle()
    .pipe(source('vendor.js'))
    .pipe(gulp.dest(jsDestination));
});

gulp.task('watch', ['browserify-src'], function() {
    gulp.watch('./src/**/*', ['browserify-src']);
    gulp.watch('./src/vendor.js', ['browserify-vendor']);
});