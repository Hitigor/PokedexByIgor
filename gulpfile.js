
const gulp = require('gulp');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const watch = require('gulp-watch');


gulp.task('js combine', () => {
    return gulp.src(['app/js/app.js', 'app/js/scripts/!*.js'])
        .pipe(concat('all.js'))
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('app/js/'))
});

gulp.task('build', ['js combine']);

gulp.task('watch', () => {
    gulp.watch(['app/js/app.js', './app/js/scripts/!*.js'], ['js combine']);
});

