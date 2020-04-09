const { src, dest, task, series, watch, parallel } = require('gulp');
const rm = require('gulp-rm');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();
const reload = browserSync.reload;
const sassGlob = require('gulp-sass-glob');
const autoprefixer = require('gulp-autoprefixer');
const px2rem = require('gulp-smile-px2rem');
const gcmq = require('gulp-group-css-media-queries');
const cleanCSS = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const svgo = require('gulp-svgo');
const svgSprite = require('gulp-svg-sprite');
const { DIST_PATH, SRC_PATH, JS_LIBS, STYLES_LIBS, JS_TOUCH, JS_MOBILE } = require('./gulp.config');
const gulpif = require('gulp-if');
const image = require('gulp-image');
const imagemin = require('gulp-imagemin');
const pngquant = require('imagemin-pngquant');
const imgCompress = require('imagemin-jpeg-recompress');
const cache = require('gulp-cache');
const env = process.env.NODE_ENV;


sass.compiler = require('node-sass');

task('clean', () => {
  return src(`${DIST_PATH}/**/*`, { read: false }).pipe(rm())
});

task('copy:html', () => {
  return src(`${SRC_PATH}/*.html`)
    .pipe(dest(DIST_PATH))
    .pipe(reload({ stream: true }));            //создает задание на перезапуск браузера при изменении файлов и работает в общем потоке
});

task('copy:font', () => {
  return src(`${SRC_PATH}/fonts/*.woff`)
    .pipe(dest(`${DIST_PATH}/fonts`))
    .pipe(reload({ stream: true }));            //создает задание на перезапуск браузера при изменении файлов и работает в общем потоке
});

task('img', function () {
  return src(`${SRC_PATH}/img/**/*`)
    .pipe(cache(imagemin([
      imgCompress({
        loops: 4,
        min: 70,
        max: 80,
        quality: 'high'
      }),
      imagemin.gifsicle(),
      imagemin.optipng(),
      imagemin.svgo()
    ])))
    .pipe(dest(`${DIST_PATH}/img/`));
});


task('image', () => {
  src(`${SRC_PATH}/img/**/*`)
    .pipe(image())
    .pipe(dest(`${DIST_PATH}/img/`));
});

task('imageMin', () => {
  src(`${SRC_PATH}/img/**/*`)
    .pipe(cache(imagemin({
      // interlaced: true,
      // progressive: true,
      // svgoPlugins: [{ removeViewBox: false }],
      // use: [pngquant()]
    })))
    .pipe(dest(`${DIST_PATH}/img`))
});

task('sass', () => {
  return src([...STYLES_LIBS, `${SRC_PATH}/css/main.scss`])
    .pipe(gulpif(env === 'dev', sourcemaps.init()))
    .pipe(concat('main.min.scss'))
    .pipe(sassGlob())                     // для подключения всех scss в  main.scss через *.scss
    .pipe(sass().on('error', sass.logError))
    .pipe(gulpif(env === 'prod', autoprefixer({                // автопрефиксы
      cascade: false
    })))
    // .pipe(gulpif(env === 'prod', gcmq()))          // соединение схожих медиа запросов
    .pipe(gulpif(env === 'prod', cleanCSS()))       // для старых браузеров указание в скобках не нужны. удалить, для минификации кода
    .pipe(px2rem({
      dpr: 1,             // base device pixel ratio (default: 2)
      rem: 16,            // root element (html) font-size (default: 16)
    }))                     /// перевод из px в rem
    .pipe(gulpif(env === 'dev', sourcemaps.write()))   // в скобках указывается путь куда сохранять сорс мапы, если нее указать то будут сохранены в конечном css
    .pipe(dest(`${DIST_PATH}/css`))
    .pipe(reload({ stream: true }))            //создает задание на перезапуск браузера при изменении файлов и работает в общем потоке
});

task('script', () => {
  return src([...JS_LIBS, ...JS_TOUCH, ...JS_MOBILE, `${SRC_PATH}/animation/*.js`])
    .pipe(gulpif(env === 'dev', sourcemaps.init()))                          // для прописывания путей из scss
    .pipe(concat('main.min.js', { newLine: ';' }))        // для склейки файлов
    .pipe(gulpif(env === 'prod', babel({                                 // для перевода в старый синтаксис js
      presets: ['@babel/env']
    })))
    .pipe(gulpif(env === 'prod', uglify()))               // для минификации 
    .pipe(gulpif(env === 'dev', sourcemaps.write()))   // в скобках указывается путь куда сохранять сорс мапы, если нее указать то будут сохранены в конечном css
    .pipe(dest(DIST_PATH))
    .pipe(reload({ stream: true }));            //создает задание на перезапуск браузера при изменении файлов и работает в общем потоке
});

task('icon', () => {
  return src(`${SRC_PATH}/svg/*.svg`)
    .pipe(svgo({                                            // подключить плагин и удалить ненужные атрибуты
      plugins: [{
        removeAttrs: {
          attrs: '(style)'
        }
      }]
    }))
    .pipe(svgSprite({                                       // создаем svg спрайт
      mode: {
        symbol: {                                           // режим создания css    defs     symbol
          sprite: '../../sprite.svg'                         // кладет файл в папку со спрайтами и создает папку с режимом создания svg
        }
      }
    }))
    .pipe(dest(`${DIST_PATH}/img/`))
});

task('server', () => {
  browserSync.init({
    server: {
      baseDir: DIST_PATH
    },
    open: true      //чтобы не открывалось каждый раз новое окно
  })
});

task('watch', () => {
  watch(`${SRC_PATH}/css/**/*.scss`, series('sass'));
  watch(`${SRC_PATH}/*.html`, series('copy:html'));
  watch(`${SRC_PATH}/animation/*.js`, series('script'));
  watch(`${SRC_PATH}/img/svg/*.svg`, series('icon'));
  watch(`${SRC_PATH}/img/**/*`, series('img'));
})

task('default', series('clean', parallel('copy:html', 'copy:font', 'img', 'sass', 'script', 'icon'),
  parallel('watch', 'server')));

task('build', series('clean', parallel('copy:html', 'copy:font', 'sass', 'img', 'script', 'icon'), 'server'));
