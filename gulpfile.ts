var appDev = 'src/';
var assetsDev = 'src/assets/';

var appProd = 'build/';
var assetsProd = 'build/assets/';

var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var imagemin = require('gulp-imagemin');
var ts = require('gulp-typescript');
var tsProject = ts.createProject('tsconfig.json');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('build-ts', () => {
    return gulp.src([appDev + '**/*.ts'])
        .pipe(sourcemaps.init())
        .pipe(tsProject())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(appProd));
});

gulp.task('build-css', () => {
    return gulp.src([assetsDev + 'scss/*.scss'])
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('custom.css'))
        .pipe(gulp.dest(assetsProd + 'css/'));
});

gulp.task('build-css-app', () => {
    return gulp.src([
        'bower_components/bootstrap/dist/css/bootstrap.min.css',
        'bower_components/font-awesome/css/font-awesome.min.css',
        'bower_components/animate.css/animate.min.css',
        'bower_components/themify-icons/css/themify-icons.css'
    ])
        .pipe(concat('app.css'))
        .pipe(gulp.dest(assetsProd + 'css/'));
});

gulp.task('build-js', () => {
    return gulp.src([assetsDev + 'js/*.js'])
        .pipe(concat('custom.js'))
        .pipe(gulp.dest(assetsProd + 'js/'));
});

gulp.task('build-js-app', () => {
    return gulp.src([
        'bower_components/jquery/dist/jquery.min.js',
        'bower_components/bootstrap/dist/js/bootstrap.min.js',
        'bower_components/remarkable-bootstrap-notify/dist/bootstrap-notify.min.js'
    ])
        .pipe(concat('app.js'))
        .pipe(gulp.dest(assetsProd + 'js/'));
});

gulp.task('build-images', () => {
    return gulp.src(assetsDev + 'images/**/*')
        .pipe(imagemin({
            progressive: true
        }))
        .pipe(gulp.dest(assetsProd + 'images/'));
});

gulp.task('resources', () => {
    return gulp.src([
        appDev + '**/*.html',
        appDev + '**/*.json',
        appDev + 'systemjs.config.js'
    ])
        .pipe(gulp.dest(appProd));
});

gulp.task('fonts', () => {
    return gulp.src([
        'bower_components/bootstrap/dist/fonts/**/*',
        'bower_components/font-awesome/fonts/**/*',
        'bower_components/themify-icons/fonts/**/*'
    ])
        .pipe(gulp.dest(assetsProd + "fonts/"));
});

gulp.task('libraries', () => {
    return gulp.src([
        'core-js/client/shim.min.js',
        'zone.js/dist/zone.js',
        'systemjs/dist/system.src.js',
        'reflect-metadata/Reflect.js',
        '@angular/**/bundles/*.umd.js',
        'rxjs/**/*.js',
        'angular-in-memory-web-api/*.js',
        'angular2-jwt/*.js',
        'js-base64/base64.js'
    ], {cwd: 'node_modules/**'})
        .pipe(gulp.dest(appProd + "libraries"));
});

gulp.task('build', ['build-ts','build-css','build-css-app','build-js','build-js-app','build-images','resources','fonts','libraries']);
gulp.task('default', ['build-ts','build-css','build-css-app','build-js','build-js-app','build-images','resources']);