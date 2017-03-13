var gulp=require("gulp");
var connect=require("gulp-connect");
gulp.task("watch",function(){
    gulp.watch("index.html",["html"]);
});
gulp.task("html",function(){
    gulp.src('./*.html')
        .pipe(connect.reload());
})
gulp.task('connect',function(){
    connect.server({
        root:'./',
        ip:'192.168.31.110',
        livereload:true
    })
})
gulp.task('default',['connect','watch'])