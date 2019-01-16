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

gulp.task('dev', gulp.series('serv', () => {
    gulp.watch([
        './**/*.{js,html}',
        '!./node_modules'
        ], (done) => {
            browserSync.reload();
            done();
        });
}));
