'use strict';

var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var jscs = require('gulp-jscs');
var jshint = require('gulp-jshint');
var jsFiles = ['*.js', '/src/**/*.js'];

gulp.task('style',function () {		
	gulp.src(jsFiles)
	.pipe(jshint())
	.pipe(jshint.reporter('jshint-stylish', {
		verbose: true
	}))
	.pipe(jscs());
});


gulp.task('inject',function(){
	var wiredep = require('wiredep').stream;
	var options = {
		bowerJson: require('./bower.json'),
		directory: './public/lib/',
		ignorePath:'../../public'
		
	};
	
	return gulp.src('./src/views/*.html')
	.pipe(wiredep(options))
	.pipe(gulp.dest('./src/views'))
});;

gulp.task('server',function () {
    var options = {
        script:'app.js',
        delayTime: 1,
        env:{
            'PORT' : 5000
        },
        watch:['*.js','.']
    };
    return nodemon(options)
    .on('restart',function (ev) {
        console.log('restarting.....');
    });
});