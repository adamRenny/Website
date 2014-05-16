var path = require('path');
var gulp = require('gulp');
var less = require('gulp-less');

gulp.task('less', function lessTask() {
    gulp.src('./styles/*.less')
        .pipe(less({
            paths: [
                path.join('.', 'styles')
            ]
        }))
        .pipe(gulp.dest(
            path.join('.', 'styles')
        ));
});