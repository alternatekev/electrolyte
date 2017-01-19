var gulp   	= require('gulp'),
    sass   	= require('gulp-sass');

gulp.task('sass', function () {
	return gulp.src('./styles/style.scss')
			.pipe(sass.sync({outputStyle: 'compressed'}).on('error', sass.logError))
			.pipe(gulp.dest('./static/'));
});

gulp.task('watch', function () {
	gulp.watch('./pages/components/**/*.scss', ['sass']);
  gulp.watch('./styles/**/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'watch']);
