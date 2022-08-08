const { src, dest, series, parallel, watch } = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const concat = require('gulp-concat');
const htmlMin = require('gulp-htmlmin')
const autoprefixes = require('gulp-autoprefixer')
const cleanCSS = require('gulp-clean-css')
const svgSprite = require('gulp-svg-sprite')
const image = require('gulp-imagemin')
const babel = require('gulp-babel')
const uglify = require('gulp-uglify-es').default
const notify = require('gulp-notify')
const sourcemaps = require('gulp-sourcemaps')
const del = require('del')
const browserSync = require('browser-sync').create()

const clean = () => {
  return del(['dist'])
}

const resources = () => {
  return src('src/resources/**')
    .pipe(dest('dist'))
}


const sassc = () => {
  return src('src/styles/sass/**/*.scss')
    .pipe(sass().on("error", sass.logError))
    .pipe(dest('dist/styles'))
    .pipe(browserSync.stream())
}

const styles = () => {
  return src('dist/styles/**/*.css')
    .pipe(sourcemaps.init())
    .pipe(concat('main.css'))
    .pipe(autoprefixes({
      cascade: false,
    }))
    .pipe(cleanCSS({
      level: 2,
    }))
    .pipe(sourcemaps.write())
    .pipe(dest('dist/styles'))
    .pipe(browserSync.stream())
}

const stylesProdaction = () => {
  return src('dist/styles/**/*.css')
    .pipe(sourcemaps.init())
    .pipe(concat('main.css'))
    .pipe(autoprefixes({
      cascade: false,
    }))
    .pipe(cleanCSS({
      level: 2,
    }))
    .pipe(dest('dist/styles'))
    .pipe(browserSync.stream())
}

const htmlMinify = () => {
  return src('src/**/*.html')
    .pipe(htmlMin({
      collapseWhitespace: true,
    }))
    .pipe(dest('dist'))
    .pipe(browserSync.stream())
}

const svgSprites = () => {
  return src('src/images/svg/**/*.svg')
    .pipe(svgSprite({
      mode: {
        stack: {
          sprite: '../sprite.svg'
        }
      }
    }))
    .pipe(dest('dist/images'))
}

const fonts = () => {
  return src([
      'src/fonts/**/*.ttf',
      'src/fonts/**/*.woff',
      'src/fonts/**/*.woff2'
    ])
    .pipe(dest('dist/fonts'))
    .pipe(browserSync.stream())
}

const scripts = () => {
  return src([
      'src/js/components/**/*.js',
      'src/js/main.js'
    ])
    .pipe(sourcemaps.init())
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(concat('app.js'))
    .pipe(uglify({
      toplevel: true
    }).on('error', notify.onError()))
    .pipe(sourcemaps.write())
    .pipe(dest('dist'))
    .pipe(browserSync.stream())
}

const scriptsProdaction = () => {
  return src([
      'src/js/components/**/*.js',
      'src/js/main.js'
    ])
    .pipe(sourcemaps.init())
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(concat('app.js'))
    .pipe(uglify({
      toplevel: true
    }).on('error', notify.onError()))
    .pipe(dest('dist'))
    .pipe(browserSync.stream())
}

const watchFiles = () => {
  browserSync.init({
    server: {
      baseDir: 'dist'
    }
  })
}

const images = () => {
  return src([
      'src/images/**/*.jpg',
      'src/images/**/*.png',
      'src/images/*.svg',
      'src/images/**/*.jpeg'
    ])
    .pipe(image())
    .pipe(dest('dist/images'))
}

watch('src/**/*.html', htmlMinify)
watch('src/styles/sass/**/*.scss', sassc)
watch('dist/styles/**/*.css', styles)
watch('src/images/svg/**/*.svg', svgSprites)
watch('src/images/**/*.jpg', images)
watch('src/js/**/*.js', scripts)
watch('src/resources/**', resources)

exports.sassc = sassc
exports.styles = styles
exports.scripts = scripts
exports.htmlMinify = htmlMinify
exports.clean = clean
exports.default = series(clean, resources, sassc, htmlMinify, fonts, scripts, styles, images, svgSprites, watchFiles)
exports.production = series(clean, resources, sassc, htmlMinify, scriptsProdaction, stylesProdaction, images, svgSprites, watchFiles)
