var concat = require('gulp-concat');
var stripDebug = require('gulp-strip-debug');
var uglify = require('gulp-uglify');
var gulp = require('gulp');

// Where do you store your Bower files?
var bowerDir = 'assets/components';

// Where do you store your JS files?
var jsDir = 'assets/javascript';

// Which directory should Sass compile to?
var targetjsDir = 'assets/javascript/min';

// JS concat, strip debugging and minify
    gulp.task('scripts', function () {
        gulp.src([
                bowerDir + '/foundation/js/foundation.min.js',
                bowerDir + '/flexslider/jquery.flexslider-min.js',
                bowerDir + '/lightbox2/js/lightbox.min.js',
                jsDir + '/script.js'
            ])
            .pipe(concat('script.js'))
            .pipe(stripDebug())
            .pipe(uglify())
            .pipe(gulp.dest(targetjsDir));
    });