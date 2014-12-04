
var sass = require('gulp-ruby-sass');
var prefixer = require('gulp-autoprefixer');
var gulp         = require('gulp');
var notify       = require('gulp-notify');
var handleErrors = require('../util/handleErrors');

// Where do you store your Sass files?
var sassDir = 'assets/scss';

// Which directory should Sass compile to?
var targetCSSDir = 'assets/css';

//Styles
gulp.task('styles', function(){
    return gulp.src(sassDir + '/main.scss')
        .pipe(sass({ style: 'extended', "sourcemap=none": true   }).on('error', handleErrors))
        .pipe(prefixer('last 10 version'))
        .pipe(gulp.dest(targetCSSDir))
        .pipe(notify({ message: 'All done, oh great one!'}));
});
