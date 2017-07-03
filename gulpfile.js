'use strict'
var gulp=require('gulp');
var $=require('gulp-load-plugins')();
var browserSync=require('browser-sync').create();
var add={
	srcPath:'src/',
	devPath:'build/',
	prdPath:'dist/',
};
gulp.task('html',function(){
	gulp.src(add.srcPath+'**/*.html')
	.pipe(gulp.dest(add.devPath))
	.pipe($.htmlmin({
		collapseWhitespace:true,
		removeComments:true,
		removeEmptyAttributes:true,
	}))
	.pipe(gulp.dest(app.prdPath))
	.pipe(browserSync.stream());
});