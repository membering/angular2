var appDev = 'src/';
var assetsDev = 'src/assets/';

var appProd = 'build/';
var assetsProd = 'build/assets/';

var gulp = require('gulp');
var sass = require('gulp-sass');
// var imagemin = require('gulp-imagemin');
var typescript = require('gulp-typescript');
var tsProject = typescript.createProject('tsconfig.json', {
    typescript: require('typescript')
});
var sourcemaps = require('gulp-sourcemaps');

gulp.task('build-css', function () {
    return gulp.src(assetsDev + 'sass/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(assetsProd + 'css/'));
});

gulp.task('build-css-app', function () {
    return gulp.src(appDev + '**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(appProd));
});

gulp.task('build-js', function () {
    return gulp.src(appDev + '**/*.ts')
        .pipe(sourcemaps.init())
        .pipe(typescript(tsProject))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(appProd));
});

gulp.task('build-images', function () {
    return gulp.src(assetsDev + 'images/**/*')
        // .pipe(imagemin({
        //     progressive: true
        // }))
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

gulp.task('systemjs', () => {
    return gulp.src([appDev + 'systemjs.config.js'])
        .pipe(gulp.dest(appProd));
});

gulp.task('libraries', () => {
    return gulp.src([
        'core-js/client/**/*',
        'systemjs/dist/system-polyfills.js',
        'systemjs/dist/system.src.js',
        'reflect-metadata/**/*',
        'rxjs/**/*',
        'zone.js/dist/**',
        '@angular/**/bundles/**',
        'angular2-jwt/**',
        'js-base64/base64.js',
        'ng2-bootstrap/bundles/ng2-bootstrap.umd.js',
        'moment/moment.js'
    ], {cwd: "node_modules/**"}) /* Glob required here. */
        .pipe(gulp.dest(appProd + "libraries"));
});

gulp.task('watch', function () {
    gulp.watch(appDev + '**/*.html', ['build-html']);
    gulp.watch(appDev + '**/*.ts', ['build-js']);
    gulp.watch(appDev + '**/*.scss', ['build-css-app']);
    gulp.watch(appDev + 'systemjs.config.js', ['systemjs']);
    gulp.watch(assetsDev + 'scss/**/*.scss', ['build-css']);
    gulp.watch(assetsDev + 'images/*', ['build-images']);
});

gulp.task('default', ['build-html','build-js','build-css-app','build-css','build-images','build-json', 'systemjs', 'libraries']);