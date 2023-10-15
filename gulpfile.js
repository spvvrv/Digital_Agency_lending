import gulp from 'gulp';
import del from "del";

import dartSass from 'sass';
import gulpSass from 'gulp-sass';
const sass = gulpSass( dartSass );

import rename from 'gulp-rename';

import cleanCss from 'gulp-clean-css'; //сжатие scss файла
// import webpcss from 'gulp-webpcss' //вывод webp изображений ЧТОБЫ РАБОТАЛ НУЖЕН МОДУЛЬ npm i -D webp-converter@2.2.3
import autoprefixer from 'gulp-autoprefixer'; // добавление вендорных префиксов
import groupCssMediaQueries from 'gulp-group-css-media-queries'; // Группировка медиа-запросов

//npm i -D gulp-babel gulp-concate gulp-uglify @babel/core
import babel from "gulp-babel"
import concat from "gulp-concat"
import uglify from "gulp-uglify"


const paths = {
  styles: {
    src: 'src/styles/**/*.scss',
    dest: 'dist/css/'
  },
  scripts: {
    src: 'src/scripts/**/*.js',
    dest: 'dist/js/'
  },
};

export const reset = () => {
  return del(['dist']);
};

export const styles = () => {
  return gulp.src(paths.styles.src)
    .pipe(sass({
      outputStyle: 'expanded' //изначальный стиль готового файла
    }))
    .pipe(groupCssMediaQueries())
    .pipe(autoprefixer({
      grid: true, //поддержка грид
      overrideBrowserlist: ['last 3 versions'], //поддержка версий браузера
      cascade: true
    }))
    .pipe(cleanCss())
    .pipe(rename({
      extname: ".min.css"
    }))
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(paths.styles.dest));
};



export const scripts = () => {
  return gulp.src(paths.scripts.src, {
      sourcemaps: true
  })
    .pipe(babel())
    .pipe(uglify())
    .pipe(concat('script.min.js'))
      .pipe(gulp.dest(paths.scripts.dest));
};

export const watch = () => {
  gulp.watch(paths.styles.src, styles)
  gulp.watch(paths.scripts.src, scripts)
};

export const build = gulp.series(reset, gulp.parallel(styles, scripts), watch)
