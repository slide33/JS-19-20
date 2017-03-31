var gulp = require('gulp'),
connect = require('gulp-connect'),
concatCss = require('gulp-concat-css'),
rename = require('gulp-rename'),
concat = require('gulp-concat'),
cssmin = require('gulp-cssmin'),
uglify = require('gulp-uglify');

gulp.task('css', function () {
  return gulp.src('other_css/*.css')
    .pipe(concatCss("main-css.css"))
    .pipe(cssmin())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('css/'));
});

gulp.task('scripts', function() {
  return gulp.src('js/*.js')
    .pipe(concat('main.js'))
    .pipe(gulp.dest('css/'));
});

gulp.task('default', ['scripts', 'css']);
