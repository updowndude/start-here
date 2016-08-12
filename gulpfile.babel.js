const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const livereload = require('gulp-livereload');
const concatCss = require('gulp-concat-css');
const sass = require('gulp-ruby-sass');
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const pump = require('pump');
const pug = require('gulp-pug');
const webpack = require('gulp-webpack');
const babel = require('gulp-babel');
const mamp = require('gulp-mamp');

const options = {};
options.user = 'yourusername';
options.port = 3306;
options.site_path = '/Applications/MAMP/htdocs/start-here';

gulp.task('myTask', ['sass'], () => {
	return gulp.src(['bower_components/material-design-lite/material.css',
		'bower_components/bootstrap/dist/css/bootstrap.css',
		'public/dist/myStyle.css'])
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

gulp.task('config', cb => {
	mamp(options, 'config', cb);
});

gulp.task('start', cb => {
	mamp(options, 'start', cb);
});

gulp.task('stop', cb => {
	mamp(options, 'stop', cb);
});

gulp.task('jsMin', ['js'], cb => {
	pump([
		gulp.src('public/dist/my-stuff.js'),
		babel(),
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
  .pipe(gulp.dest('public/dist/done'));
});

gulp.task('pug', () => {
	return gulp.src('pug/index.pug')
  .pipe(pug())
	.pipe(gulp.dest('./'))
	.pipe(livereload());
});

gulp.task('default', () => {
	livereload({start: true});
	gulp.watch('js/*.js', ['js']);
	gulp.watch('sass/*.sass', ['myTask']);
	gulp.watch('pug/index.pug', ['pug']);
	gulp.watch('includes/*.pug', ['pug']);
	gulp.watch('jsx/*.jsx', ['js']);
});

gulp.task('jsx', () => {
	return gulp.src('jsx/my-com.jsx')
		.pipe(sourcemaps.init())
		.pipe(webpack({
			module: {
				loaders: [{
					test: /.jsx?$/,
					loader: 'babel-loader',
					exclude: /node_modules/,
					query: {
						presets: ['es2015', 'es2016', 'react'],
						plugins: ['react-html-attrs', 'transform-class-properties']
					}
				}]
			},
			output: {
				filename: 'my-com.js'
			}
		}))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('public/dist'));
});

gulp.task('lib', () => {
	return gulp.src(['bower_components/material-design-lite/material.min.js',
		'bower_components/bootstrap-without-jquery/bootstrap3/bootstrap-without-jquery.js'])
    .pipe(concat('rLib.js'))
    .pipe(gulp.dest('public/dist/done'));
});

gulp.task('mamp', ['config', 'start']);
