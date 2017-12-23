const gulp        = require('gulp');
const browserSync = require('browser-sync').create();
const sass        = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

// Compile Sass & Inject Into Browser
gulp.task('sass', function() {
    return gulp.src(['app/assets/css/**/*.scss'])

    .pipe(sass({outputStyle: ''}).on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 15 versions', '> 1%', 'ie 8', 'ie 7'],
      cascade: false
      }))
        .pipe(gulp.dest("app/assets/css"))
        .pipe(browserSync.stream());
});


// Watch Sass & Serve
gulp.task('serve', ['sass'], function() {
    browserSync.init({
        server: "app"
});

gulp.watch(["app/assets/css/**/*.scss"], ['sass']);

gulp.watch("app/*.html").on('change', browserSync.reload);
gulp.watch("app/assets/js/*.js").on('change', browserSync.reload);

});

// Default Task
gulp.task('default', ['serve']);
