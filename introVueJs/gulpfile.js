'use strict';

const gulp = require('gulp');
const browserSync = require('browser-sync').create();

gulp.task('serv', () => {
    browserSync.init({
        server: {
             baseDir: './'
        }
    })
});

gulp.task('watch', () => {
    gulp.watch(['./**/*.{css,html,js}','!./node_modules'], (done) => {
        browserSync.reload()
        done()
    });
});

gulp.task('dev', gulp.parallel('serv', 'watch'));
