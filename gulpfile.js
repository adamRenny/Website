var path = require('path');
var gulp = require('gulp');
var less = require('gulp-less');

var WEB_DEST = path.join('.', 'web');
var WEB_SRC = path.join('.', 'web-src');
var STYLES_SRC = path.join(WEB_SRC, 'styles');
var STYLES_DEST = path.join(WEB_DEST, 'styles');

gulp.task('less', function lessTask() {{}
    gulp.src(path.join(STYLES_SRC, 'screen.less'))
        .pipe(less({
            paths: [
                path.join(STYLES_SRC, 'styles')
            ]
        }))
        .pipe(gulp.dest(
            path.join(STYLES_DEST)
        ));
});