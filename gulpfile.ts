var appDev = 'src/';
var assetsDev = 'src/assets/';

var appProd = 'build/';
var assetsProd = 'build/assets/';

var gulp = require('gulp');
var sass = require('gulp-sass');
var imagemin = require('gulp-imagemin');
var ts = require('gulp-typescript');
var tsProject = ts.createProject('tsconfig.json');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('build-css', () => {
    return gulp.src([assetsDev + 'sass/*.scss'])
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
        .pipe(imagemin({
            progressive: true
        }))
        .pipe(gulp.dest(assetsProd + 'images/'));
});

gulp.task('resources', () => {
    return gulp.src([appDev + '**/*.html', appDev + '**/*.json', appDev + 'systemjs.config.js'])
        .pipe(gulp.dest(appProd));
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
        'js-base64/base64.js',
        'ng2-bootstrap/bundles/ng2-bootstrap.umd.js',
        'moment/moment.js'
    ], {cwd: 'node_modules/**'})
        .pipe(gulp.dest(appProd + "libraries"));
});

gulp.task('fonts', () => {
    return gulp.src([
        'node_modules/bootstrap-sass/assets/fonts/**/*',
        'node_modules/font-awesome/fonts/**/*'
    ])
        .pipe(gulp.dest(assetsProd + "fonts/"));
});

gulp.task('build', ['build-js','build-css-app','build-css','build-images','resources','libraries','fonts']);
gulp.task('default', ['build-js','build-css-app','build-css','build-images','resources']);