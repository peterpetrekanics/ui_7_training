var gulp = require('gulp');
var sass = require('gulp-sass');
var bourbon = require('node-bourbon'); 

gulp.task('sass', function () {
  return gulp.src('./bower_components/lexicon/release/scss/*.scss')
    .pipe(
    	sass(
    		{
				includePaths: bourbon.includePaths
			}
		).on('error', sass.logError)
	)
    .pipe(gulp.dest('./build/css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./src/scss/**/*.scss', ['sass']);
});