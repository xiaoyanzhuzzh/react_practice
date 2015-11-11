'use strict';
var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var browserify = require('browserify');
var del = require('del');
var reactify = require('reactify');
var source = require('vinyl-source-stream');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

var paths = {
    less: ['./src/style/**/*.less'],
    jade: ['./src/index.jade'],
    mainJs: ['./src/js/main.js'],
    js: ['./src/js/*.js']
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

gulp.task('bundleJs', function(){
    browserify(paths.mainJs)
        .transform(reactify)
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('build'));
});

gulp.task('serve', ['bundleJs', 'lessCompiler', 'jadeCompiler'], function () {
    browserSync({
        notify: false,
        port: 9000,
        server: {
            baseDir: 'build'
        }
    });

    gulp.watch(paths.less, ['lessCompiler', reload]);
    gulp.watch(paths.js, ['bundleJs', reload]);
    gulp.watch(paths.jade, ['jadeCompiler', reload]);
});

gulp.task('default', ['serve']);