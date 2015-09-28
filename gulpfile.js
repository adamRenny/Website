'use strict';

var gulp = require('gulp');
var gulpUtil = require('gulp-util');
var less = require('gulp-less');
var babel = require('gulp-babel');
var babelify = require('babelify');
var del = require('del');
var minifyCSS = require('gulp-minify-css');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var buffer = require('vinyl-buffer');
var source = require('vinyl-source-stream');
var argv = require('yargs').argv;
var browserify = require('browserify');

var path = require('path');

var CONFIG = require('./tasks/config');

// Gather the mode from the arguments

var isDev = typeof argv.dev !== 'undefined';
var isProd = typeof argv.prod !== 'undefined';
var isStage = typeof argv.stage !== 'undefined';

var shouldMinify = isProd;
var shouldCleanAfterCompilation = false;

gulp.task('client:script', function() {
    return browserify({
        entries: CONFIG.SOURCE_SCRIPT_MAIN,
        extensions: ['.js', '.jsx'],
        debug: true
    })
    .transform(babelify)
    .bundle()
        .on(
            'error',
            gulpUtil.log.bind(gulpUtil, 'Browserify error')
        )
    .pipe(source(CONFIG.MAIN_SCRIPT))
    .pipe(buffer())
        .pipe(
            sourcemaps.init({
                loadMaps: true
            })
        )
            .pipe(shouldMinify ? uglify() : gulpUtil.noop())
        .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(CONFIG.DEST_SCRIPT));
});

gulp.task('server:script', function() {
    return gulp.src(path.join(CONFIG.SOURCE_SERVER, '**', '*.{js,jsx}'))
        .pipe(babel())
        .pipe(gulp.dest(CONFIG.DEST_SERVER));
});

gulp.task('client:style', function() {
    return gulp.src(CONFIG.SOURCE_STYLE_MAIN)
        .pipe(sourcemaps.init({
            loadMaps: true
        }))
            .pipe(less({
                paths: CONFIG.SOURCE_STYLE
            }))
        .pipe(shouldMinify ? minifyCSS() : gulpUtil.noop())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(CONFIG.DEST_STYLE));
});

gulp.task('client', ['client:script', 'client:style']);
gulp.task('server', ['server:script']);

gulp.task('default', ['client', 'server']);