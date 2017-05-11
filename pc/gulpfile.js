var gulp = require('gulp');
var	less = require('gulp-less');//less编译
var watch = require('gulp-watch');//监听
var connect = require('gulp-connect');//热更新模块
var imagemin = require('gulp-imagemin');//压缩image
var minify = require('gulp-clean-css');//压缩css
var uglify = require('gulp-uglify');//压缩js文件
var htmlmin = require('gulp-htmlmin');//压缩html
gulp.task('less',function(){
	gulp.src(['less/*.less','*.less'])
		.pipe(less())
		.pipe(gulp.dest('css'))
		.pipe(connect.reload());
});

gulp.task('js',function(){
	gulp.src('js/*.js')
		.pipe(connect.reload())
});

gulp.task('html',function(){
	gulp.src('*/**/*.html')
		.pipe(connect.reload());
});

gulp.task('css',function(){
	gulp.src('css/*.css')
		.pipe(connect.reload());
});
//		livereload:true,
gulp.task('connect',function(){
	connect.server({
		port:8020,
		livereload:true
	});
});

gulp.task('watch',function(){
	gulp.watch('less/**/*.less', ['less']); //热更新less编译css
	gulp.watch('*.html',['html']);
	gulp.watch('js/*.js',['js']);
	gulp.watch('css/*.css',['css']);
});

//压缩图片
gulp.task('minifyImg',function(){
	gulp.src('img/*')
		.pipe(imagemin())
		.pipe(gulp.dest('../../../saas/devicetest/pc/img'));
});

//压缩css
gulp.task('clean',function(){
	gulp.src('css/*.css')
		.pipe(minify())
		.pipe(gulp.dest('../../../saas/devicetest/pc/css'));
});

//压缩js
gulp.task('uglify',function(){
	gulp.src('js/json2.js')
		.pipe(uglify())
		.pipe(gulp.dest('../../../saas/devicetest/pc/js'));
});

//压缩html
gulp.task('TestHtmlmin',function(){

	var options = {
        removeComments: true,//清除HTML注释
        collapseWhitespace: true,//压缩HTML
        collapseBooleanAttributes: true,//省略布尔属性的值 <input checked="true"/> ==> <input />
        removeEmptyAttributes: true,//删除所有空格作属性值 <input id="" /> ==> <input />
        removeScriptTypeAttributes: true,//删除<script>的type="text/javascript"
        removeStyleLinkTypeAttributes: true,//删除<style>和<link>的type="text/css"
        minifyJS: true,//压缩页面JS
        minifyCSS: true//压缩页面CSS
	}

	gulp.src('*.html')
		.pipe(htmlmin(options))
		.pipe(gulp.dest('../../../saas/devicetest/pc'));
});

//拷贝文件
gulp.task('copy',function(){
	gulp.src('package.json')
		.pipe(gulp.dest('../'));
});

gulp.task('default',['less','css','html','js','connect','minifyImg','clean','uglify','TestHtmlmin','watch','copy']);
