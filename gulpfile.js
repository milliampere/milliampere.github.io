const gulp = require('gulp');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const browserSync = require('browser-sync').create();
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const babel = require('gulp-babel');
const rename = require('gulp-rename');


gulp.task('default', ['sass'], () => {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch("./*.html").on('change', browserSync.reload);

    gulp.watch('./src/scss/**/*.scss', ['sass']);
    gulp.watch('./src/js/*.js', ['babel']);
});


gulp.task('sass', () => {
    return gulp.src('./src/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss([autoprefixer({browsers: ['last 2 versions']}), cssnano()]))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./dist/css'))
        .pipe(browserSync.stream());
});


gulp.task('babel', () => {
    return gulp.src('./src/js/*.js')
        .pipe(babel({
            presets: ['latest']
        }))
        .pipe(gulp.dest('dist/js'));
});