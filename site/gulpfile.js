var gulp = require('gulp');
var babelify = require('babelify');
var reactify = require('reactify');
var browserify = require('browserify');
var literalify = require('literalify');
var streamify = require('gulp-streamify')
var source = require('vinyl-source-stream');
var concat = require('gulp-concat');
var es = require('event-stream');
var addSrc = require('gulp-add-src');
var server = require('gulp-server-livereload');

var baseDestination = './web';
var jsDestination = baseDestination + '/javascripts';

gulp.task('browserify-src', ['assets'], function() {
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
        .pipe(addSrc('vendor/*.js'))
        .pipe(streamify(concat('vendor.js')))
        .pipe(gulp.dest(jsDestination));
});

gulp.task('assets', function() {
    return gulp.src('src/assets/*')
        .pipe(gulp.dest(baseDestination));
});

gulp.task('watch', ['browserify-src'], function() {
    gulp.watch('./src/**/*', ['browserify-src']);
    gulp.watch(['./src/vendor.js', 'vendor/*'], ['browserify-vendor']);
});

gulp.task('serve', ['webserver', 'watch'], function() {
});

gulp.task('webserver', ['browserify-src'], function() {
    gulp.src('web')
        .pipe(server({
            livereload: true,
            open: true,
            log: 'debug'
            //clientConsole: true
        }));
})