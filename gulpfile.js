var gulp = require('gulp');
var browserSync = require('browser-sync');

/**
 * BrowserSync & Sever
 **/
 gulp.task('bs', function() {
  browserSync({
    server: {
      baseDir: './public/'
    }
  });
});

/**
 * Build
 **/
gulp.task('build:html', function(){
  gulp.src('./assets/**/*.html')
    .pipe(gulp.dest('./public/'))
    .pipe(browserSync.reload({ stream: true }));
});

/**
 * Watch
 **/
 gulp.task('watch', function(){
  gulp.watch(
    './assets/**/*.html',
    ['build:html']);
 });

/**
 * 開発
 **/
 gulp.task('default', ['build:html', 'bs', 'watch']);