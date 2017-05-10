var gulp = require('gulp');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
var less = require('gulp-less');
var concat=require('gulp-concat');
var minify = require('gulp-clean-css');//压缩css
var connect = require('gulp-connect');
var watch = require('gulp-watch');



//gulp.task('reloadWebStation',function(){
//	gulp.
//})


//拷贝文件
gulp.task('copyPackge.json',function(){//定义任务

	gulp.src('package.json')
			   .pipe(gulp.dest('../'));

})
.task('uglify',function(){

	gulp.src('*.js')
			   .pipe(uglify())
			   .pipe(gulp.dest('../压缩完的东东'));

})
.task('imagemin',function(){

		gulp.src('*png')
			.pipe(imagemin())
			.pipe(gulp.dest('../压缩完的东东'));

})
.task('less',function(){
	gulp.src('*.less')
		.pipe(less())
		.pipe(gulp.dest('../压缩完的东东'));

})
.task('concatFile',function(){
	gulp.src('*.css')
		.pipe(concat('style.css'))
		.pipe(minify())
		.pipe(gulp.dest('../压缩完的东东'))
})
.task('http-server',function(){
	connect.server({
		port:8020,
		livereload:true
	});
})
.task('watch',function(){
	gulp.watch('index.html',function(){
		gulp.src('index.html').pipe(connect.reload());
	})
});
gulp.task('default',['copyPackge.json','uglify','imagemin','less','concatFile','http-server','watch']);
