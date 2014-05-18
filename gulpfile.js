var path = require('path');
var gulp = require('gulp');
var less = require('gulp-less');

gulp.task('less', function lessTask() {
    gulp.src(path.join('.', 'web', 'styles', '*.less'))
        .pipe(less({
            paths: [
                path.join('.', 'web', 'styles')
            ]
        }))
        .pipe(gulp.dest(
            path.join('.', 'web', 'styles')
        ));
});