const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const rename = require('gulp-rename');
const babel = require('gulp-babel');


/* Browser Sync and gulp.watch() */
gulp.task('default', ['sass', 'babel'], () => {
    browserSync.init({                                      
        server: {
            baseDir: "./"
        }
    });
    gulp.watch("./*.html").on('change', browserSync.reload);    

    gulp.watch('./src/scss/**/*.scss', ['sass']);               
    gulp.watch('./src/js/*.js', ['babel']);                     
});


/* Sass-task */
gulp.task('sass', () => {
  const postcssPlugins = [                                   
    autoprefixer({browsers: ['last 2 versions']}),         
    cssnano()                                                
  ];
    return gulp.src('./src/scss/**/*.scss')                                      
        .pipe(sass().on('error', sass.logError))                                  
        .pipe(postcss(postcssPlugins))
        .pipe(rename({suffix: '.min'}))                                                    
        .pipe(gulp.dest('./dist/css'))                                                     
        .pipe(browserSync.stream());                                                          
});


gulp.task('babel', () => {
    return gulp.src('./src/js/*.js')            
        .pipe(babel({                           
            presets: ['env']
        }))
        .pipe(gulp.dest('dist/js'));            
});

