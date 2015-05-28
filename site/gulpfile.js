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
var less = require('gulp-less');

var baseDestination = './web';
var jsDestination = baseDestination + '/javascripts';
var cssDestination = baseDestination + '/stylesheets';

gulp.task('src', function() {
    return browserify({
            entries: ['./src/index.js'],
            paths: ['./src'],
            extensions: ['.jsx'],
            fullPaths: true
        })
        .transform(reactify)
        .transform(babelify)
        .bundle()
        .pipe(source('app.js'))
        .pipe(gulp.dest(jsDestination));
});

gulp.task('vendor', function() {
    gulp.src('vendor/*.css')
        .pipe(streamify(concat('vendor.css')))
        .pipe(gulp.dest(cssDestination));
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

gulp.task('style', function() {
    return gulp.src('src/style/**/*.less')
        .pipe(concat('style.css'))
        .pipe(gulp.dest(cssDestination));
});

gulp.task('watch', ['src', 'style', 'assets'], function() {
    gulp.watch('./src/assets/*', ['assets']);
    gulp.watch(['./src/**/*.js', './src/**/*.jsx'], ['src']);
    gulp.watch('./src/style/**/*.less', ['style']);
    gulp.watch(['./src/vendor.js', 'vendor/*'], ['vendor']);
});

gulp.task('serve', ['watch'], function() {
    gulp.src('web')
        .pipe(server({
            livereload: true,
            open: true,
            log: 'debug'
        }));
})