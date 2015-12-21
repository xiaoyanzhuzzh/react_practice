'use strict';
var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var runSequence = require('run-sequence');
var browserify = require('browserify');
var reactify = require('reactify');
var del = require('del');
var source = require('vinyl-source-stream');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

var paths = {
    less: ['./src/style/**/*.less'],
    jade: ['./src/index.jade'],
    js: ['./src/js/*/**.js'],
    testJs: ['./__tests__/*/**.js'],
    vendor: ['./lib']
};

gulp.task('clean', function(done) {
   del(['build'], done);
});

gulp.task('lessCompiler', function() {
    return gulp.src(paths.less)
        .pipe($.less())
        .pipe(gulp.dest('build/style'));
});

gulp.task('jadeCompiler', function () {
    return gulp.src(paths.jade)
        .pipe($.jade({pretty: true}))
        .pipe(gulp.dest('build'));
});

gulp.task('copy:vendor', function() {
    return gulp.src(paths.vendor)
        .pipe(gulp.dest('build/lib'));
});

gulp.task('bundle', function(){
    return browserify("./src/js/client.js")
        .transform(reactify)
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('build'));
});

gulp.task('build', ['bundle', 'copy:vendor', 'lessCompiler', 'jadeCompiler'], function () {
    browserSync({
        notify: false,
        port: process.env.PORT || 9000,
        server: {
            baseDir: 'build'
        }
    });
});

gulp.task('build:Dev', ['bundle', 'copy:vendor', 'lessCompiler', 'jadeCompiler'], function () {
    browserSync({
        notify: false,
        port: process.env.PORT || 9000,
        server: {
            baseDir: ['build', 'src']
        }
    });

    gulp.watch(paths.less, ['lessCompiler', reload]);
    gulp.watch(paths.js, ['build', reload]);
    gulp.watch(paths.jade, ['jadeCompiler', reload]);
});

gulp.task('test', $.shell.task('npm test', {
    ignoreErrors: false
}));

