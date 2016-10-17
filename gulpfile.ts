var appDev = 'src/';
var assetsDev = 'src/assets/';

var appProd = 'build/';
var assetsProd = 'build/assets/';

var gulp = require('gulp');
var sass = require('gulp-sass');
// var imagemin = require('gulp-imagemin');
var ts = require('gulp-typescript');
var tsProject = ts.createProject('tsconfig.json');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('build-css', () => {
    return gulp.src(assetsDev + 'sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(assetsProd + 'css/'));
});

gulp.task('build-css-app', () => {
    return gulp.src(appDev + 'app/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(appProd + 'app/'));
});

gulp.task('build-js', () => {
    return gulp.src(appDev + '**/*.ts')
        .pipe(sourcemaps.init())
        .pipe(tsProject())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(appProd));
});

gulp.task('build-images', () => {
    return gulp.src(assetsDev + 'images/**/*')
        // .pipe(imagemin({
        //     progressive: true
        // }))
        .pipe(gulp.dest(assetsProd + 'images/'));
});

gulp.task('resources', () => {
    return gulp.src([appDev + '**/*', '!' + assetsDev + '**/*', '!**/*.ts', '!**/*.scss'])
        .pipe(gulp.dest("build"));
});

gulp.task('libraries', () => {
    return gulp.src([
        'core-js/**/*',
        'systemjs/**/*',
        'reflect-metadata/**/*',
        'rxjs/**/*',
        'zone.js/**/*',
        '@angular/**/*',
        'angular2-jwt/**',
        'js-base64/**/*',
        'ng2-bootstrap/**/*',
        'moment/**/*'
    ], {cwd: 'node_modules/**'}) /* Glob required here. */
        .pipe(gulp.dest(appProd + "libraries"));
});

gulp.task('watch', function () {
    gulp.watch(appDev + '**/*.ts', ['build-js']);
    gulp.watch(appDev + 'app/**/*.scss', ['build-css-app']);
    gulp.watch(appDev + 'systemjs.config.js', ['systemjs']);
    gulp.watch(assetsDev + 'scss/**/*.scss', ['build-css']);
    gulp.watch(assetsDev + 'images/*', ['build-images']);
});

gulp.task('default', ['build-js','build-css-app','build-css','build-images','resources', 'libraries']);