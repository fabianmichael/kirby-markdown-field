var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('prefix', function() {
    return gulp.src('./index.css')
               .pipe(autoprefixer())
               .pipe(gulp.dest('./'));
});

// Default Task
gulp.task('default', ['prefix']);