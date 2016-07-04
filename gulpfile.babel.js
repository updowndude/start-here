const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const livereload = require('gulp-livereload');
const concatCss = require('gulp-concat-css');
const sass = require('gulp-ruby-sass');
const sourcemaps = require('gulp-sourcemaps');
const react = require('gulp-react');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const pump = require('pump');
const babel = require('gulp-babel');
const pug = require('gulp-pug');

gulp.task('myTask', ['sass'], () => {
	return gulp.src(['public/dist/myStyle.css',
  'bower_components/material-design-lite/material.css'])
    .pipe(concatCss('final.css'))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('public/dist/done'))
    .pipe(livereload());
});

gulp.task('sass', () => {
	return sass('sass/myStyle.sass')
    .on('error', sass.logError)
		.pipe(sourcemaps.write())
		.pipe(sourcemaps.write('maps', {
			includeContent: false,
			sourceRoot: 'source'
		}))
    .pipe(gulp.dest('public/dist'));
});

gulp.task('jsMin', ['js'], cb => {
	pump([
		gulp.src('public/dist/my-stuff.js').pipe(babel()),
		uglify(),
		gulp.dest('public/dist/done')
	],
     cb
   )
    .pipe(livereload());
});

gulp.task('js', ['jsx'], () => {
	return gulp.src(['public/dist/my-Com.js', 'js/stuff.js'])
  .pipe(concat('my-stuff.js'))
  .pipe(gulp.dest('public/dist'));
});

gulp.task('pug', () => {
	return gulp.src('pug/index.pug')
  .pipe(pug())
	.pipe(gulp.dest('./'))
	.pipe(livereload());
});

gulp.task('default', () => {
	livereload({start: true});
	gulp.watch('js/*.js', ['jsMin']);
	gulp.watch('sass/*.sass', ['myTask']);
	gulp.watch('pug/index.pug', ['pug']);
	gulp.watch('includes/*.pug', ['pug']);
	gulp.watch('jsx/*.jsx', ['jsMin']);
});

gulp.task('jsx', () => {
	return gulp.src('jsx/my-com.jsx')
		.pipe(sourcemaps.init())
		.pipe(react())
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('public/dist'));
});

gulp.task('lib', () => {
	return gulp.src(['bower_components/material-design-lite/material.js',
  'bower_components/three.js/three.js',
  'bower_components/react/react.min.js',
  'bower_components/react/react-dom.min.js'])
    .pipe(concat('rLib.js'))
    .pipe(gulp.dest('public/dist'));
});

gulp.task('libmin', ['lib'], cb => {
	pump([
		gulp.src('public/dist/rLib.js').pipe(babel()),
		uglify(),
		gulp.dest('public/dist/done')
	],
     cb
   );
});
