import gulp from 'gulp';
import del from 'del';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
const sass = gulpSass(dartSass);
import rename from 'gulp-rename';
import cleanCss from 'gulp-clean-css'; //сжатие scss файла
// import webpcss from 'gulp-webpcss' //вывод webp изображений ЧТОБЫ РАБОТАЛ НУЖЕН МОДУЛЬ npm i -D webp-converter@2.2.3
import autoprefixer from 'gulp-autoprefixer'; // добавление вендорных префиксов
import groupCssMediaQueries from 'gulp-group-css-media-queries'; // Группировка медиа-запросов
//npm i -D gulp-babel gulp-concate gulp-uglify @babel/core @babel/preset-env
import babel from 'gulp-babel';
import concat from 'gulp-concat';
import uglify from 'gulp-uglify';
import sourcemaps from 'gulp-sourcemaps';
import imagemin from 'gulp-imagemin';
import htmlmin from 'gulp-htmlmin';
import newer from 'gulp-newer';
import browsersync from 'browser-sync';
// import  gulpPug from 'gulp-pug'
browsersync.create();
import fileinclude from 'gulp-file-include';

const paths = {
  styles: {
    src: 'src/styles/**/*.scss',
    dest: 'dist/css/',
  },
  scripts: {
    src: 'src/scripts/**/*.js',
    dest: 'dist/js/',
  },
  images: {
    src: 'src/images/**',
    dest: 'dist/images/',
  },
  html: {
    src: 'src/**/*.html',
    dest: 'dist/',
  },
  // pug: {
  //   src: 'src/*.pug',
  //   dest: 'dist/'
  // },
};

export const reset = () => {
  return del(['dist/*', '!dist/images']);
};

export const styles = () => {
  return gulp
    .src(paths.styles.src)
    .pipe(sourcemaps.init())
    .pipe(
      sass({
        outputStyle: 'expanded', //изначальный стиль готового файла
      })
    )
    .pipe(groupCssMediaQueries())
    .pipe(
      autoprefixer({
        grid: true, //поддержка грид
        overrideBrowserlist: ['last 3 versions'], //поддержка версий браузера
        cascade: true,
      })
    )
    .pipe(
      cleanCss({
        level: 2,
      })
    )
    .pipe(
      rename({
        extname: '.min.css',
      })
    )
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.styles.dest))
    .pipe(browsersync.stream());
};

export const scripts = () => {
  return gulp
    .src(paths.scripts.src)
    .pipe(sourcemaps.init())
    .pipe(
      babel({
        presets: ['@babel/env'],
      })
    )
    .pipe(uglify())
    .pipe(concat('app.min.js'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.scripts.dest))
    .pipe(browsersync.stream());
};

export const images = () => {
  return gulp
    .src(paths.images.src)
    .pipe(newer(paths.images.dest))
    .pipe(
      imagemin({
        progressive: true,
        svgoPlugins: [{ removeViewBox: false }],
        interlaced: true,
        optimizationLevel: 5, // 0 to 7
      })
    )
    .pipe(gulp.dest(paths.images.dest));
};

// export const pug = () => {
//   return gulp.src(paths.pug.src)
//   .pipe(gulpPug())
//   .pipe(gulp.dest(paths.pug.dest))
//   .pipe(browsersync.stream());
// }

export const html = () => {
  return gulp
    .src(paths.html.src)
    .pipe(fileinclude())
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest(paths.html.dest))
    .pipe(browsersync.stream());
};

export const watch = () => {
  browsersync.init({
    server: {
      baseDir: './dist/',
    },
  });
  gulp.watch(paths.html.dest).on('change', browsersync.reload);
  gulp.watch(paths.html.src, html);
  gulp.watch(paths.styles.src, styles);
  gulp.watch(paths.scripts.src, scripts);
  gulp.watch(paths.images.src, images);
};

export const build = gulp.series(
  reset,
  html,
  gulp.parallel(styles, scripts, images),
  watch
);

