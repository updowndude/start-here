var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var livereload = require('gulp-livereload');
var concatCss = require('gulp-concat-css');
var minify = require('gulp-minify');
var sass = require('gulp-ruby-sass');
var shell = require('gulp-shell');
var sourcemaps = require('gulp-sourcemaps');
var react = require('gulp-react');

gulp.task('myTask',['sass'] ,function() {
  return gulp.src('dist/*.css')
    .pipe(concatCss("done/final.css"))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist'))
    .pipe(livereload());
});

gulp.task('sass', function () {
  return sass('./sass/myStyle.sass')
    .on('error', sass.logError)
    .pipe(gulp.dest('./dist'));
});

gulp.task('jsBuild', shell.task([
  'npm run build'
]));

gulp.task('jsMin', function() {
  return gulp.src('dist/done/*.js')
  .pipe(minify({
        ext:{
					src:'-debug.js',
          min:'.js'
        },
        exclude: ['tasks'],
        ignoreFiles: ['.combo.js', '-min.js']
    }))
    .pipe(gulp.dest('./dist/done'));
});

gulp.task('js',['jsBuild'] ,function() {
  return gulp.src('js/*.js')
	.pipe(livereload());
});

gulp.task('index', function() {
  return gulp.src('index.php')
    .pipe(livereload());
});

gulp.task('includes', function() {
  return gulp.src('includes/*.php')
    .pipe(livereload());
});

gulp.task('php', function() {
  return gulp.src('php/*.php')
    .pipe(livereload());
});

gulp.task("watch",function()
{
  livereload({ start: true });
  gulp.watch('js/*.js',['js']);
  gulp.watch('sass/*.sass',['myTask']);
  gulp.watch('index.php',['index']);
  gulp.watch('includes/*.php',['includes']);
  gulp.watch('php/*.php',['php']);
  gulp.watch('jsx/*.jsx',['jsx']);
});

gulp.task('jsx', function () {
	return gulp.src('jsx/myCom.jsx')
		.pipe(sourcemaps.init())
		.pipe(react())
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('dist/done')).pipe(livereload());
});

gulp.task("default",["watch"]);
