var gulp = require('gulp'),
    browserSync = require('browser-sync').create();

var baseDir = './', // server 的地址
    watchPath = './*.html'; // 需要监控的文件
gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: baseDir
        }
    })
    return gulp.watch(watchPath).on('change', browserSync.reload)
})

gulp.task('default', ['serve'])
