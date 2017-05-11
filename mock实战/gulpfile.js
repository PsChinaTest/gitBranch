var gulp = require('gulp');
var server = require('./server');   //mock路由
var webserver = require('gulp-webserver'); 
var mockServer = require('gulp-mock-server');

var url = require('url');

var option = {
	port:8090,
	middleware:function(req,res,next){
		//console.log(req,res);
		var urlObj = url.parse(req.url,true),
			method = req.method,
			param = urlObj.query;
			server(res,urlObj.pathname,param,method,next);
	}
}

gulp.task('mockData',function(){
	gulp.src('.')
		.pipe(webserver(option));
})

gulp.task('default',['mockData']);