var gulp = require('gulp');

gulp.task('watch', ['setWatch'], function() {
	gulp.watch('assets/scss/**', ['styles']);
	gulp.watch('assets/javascript/**', ['scripts']);
	// Note: The browserify task handles js recompiling with watchify
});
