/**
 * Created by Tareq Boulakjar. from angulartypescript.com
 */
var gulp = require('gulp');
var sass = require('gulp-sass');

var assetsDev = 'assets/';
var assetsProd = 'build/';

var appDev = 'src/';
var appProd = 'app/';

/* Mixed */
var ext_replace = require('gulp-ext-replace');

/* CSS */
var postcss = require('gulp-postcss');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('autoprefixer');
var precss = require('precss');
var cssnano = require('cssnano');

/* JS & TS */
var jsuglify = require('gulp-uglify');
var typescript = require('gulp-typescript');

/* Images */
var imagemin = require('gulp-imagemin');

var tsProject = typescript.createProject('tsconfig.json');

gulp.task('build-scss', function () {
    return gulp.src(assetsDev + 'sass/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(assetsProd + 'css/'));
});

gulp.task('build-scss-app', function () {
    return gulp.src(appDev + '**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(appProd));
});

gulp.task('build-ts', function () {
    return gulp.src(appDev + '**/*.ts')
        .pipe(sourcemaps.init())
        .pipe(typescript(tsProject))
        .pipe(sourcemaps.write())
        //.pipe(jsuglify())
        .pipe(gulp.dest(appProd));
});

gulp.task('build-images', function () {
    return gulp.src(assetsDev + 'images/**/*')
        .pipe(imagemin({
            progressive: true
        }))
        .pipe(gulp.dest(assetsProd + 'images/'));
});

gulp.task('build-html', function () {
    return gulp.src(appDev + '**/*.html')
        .pipe(gulp.dest(appProd));
});

gulp.task('build-json', function () {
    return gulp.src(appDev + '**/*.json')
        .pipe(gulp.dest(appProd));
});

gulp.task('watch', function () {
    gulp.watch(appDev + '**/*.html', ['build-html']);
    gulp.watch(appDev + '**/*.ts', ['build-ts']);
    gulp.watch(appDev + '**/*.scss', ['build-scss-app']);
    gulp.watch(assetsDev + 'scss/**/*.scss', ['build-scss']);
    gulp.watch(assetsDev + 'images/*', ['build-images']);
});

gulp.task('default', ['build-html','build-ts','build-scss-app','build-scss','build-images','build-json']);

