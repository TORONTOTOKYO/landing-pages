const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const csso = require('gulp-csso');
const sass = require('gulp-sass');
const pug = require('gulp-pug');
const rename = require('gulp-rename');
const browserSync = require('browser-sync');
const babel = require('gulp-babel');
const prettify = require('gulp-prettify');
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');
const plumber = require('gulp-plumber');
const gcmq = require('gulp-group-css-media-queries');
const minify = require('gulp-minify');
const htmlmin = require('gulp-htmlmin');

const dest = './build';
const src = './app';

const htmlPrettifyConfig = {
	unformatted: ["pre", "code", "textarea", "script"],
	indent_char: " ",
	indent_size: 4,
	preserve_newlines: true,
	brace_style: "expand",
	end_with_newline: true
};

gulp.task('images', function () {
	return gulp.src(src + '/img/**/*')
		.pipe(gulp.dest(dest + '/img'))
});


gulp.task('styles', function () {
	return gulp.src([src + '/sass/**/*.sass'])
		.pipe(plumber())
		.pipe(sass().on('error', sass.logError))
		.pipe(sourcemaps.init())
		.pipe(autoprefixer({
			cascade: false
		}))
		.pipe(gcmq())
		.pipe(gulp.dest(dest + '/css'))
		.pipe(csso())
		.pipe(rename({
			suffix: '.min'
		}))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest(dest + '/css'))
		.pipe(browserSync.stream())
});

gulp.task('pug', function () {
	return gulp.src(src + "/*.pug")
		.pipe(plumber())
		.pipe(pug({ pretty: true }))
		.pipe(prettify(htmlPrettifyConfig))
		.pipe(htmlmin({ collapseWhitespace: true }))
		.pipe(gulp.dest(dest))
		.pipe(browserSync.stream());
});

gulp.task('js', function () {
	return gulp.src(src + '/js/**/*.js')
		.pipe(sourcemaps.init())
		.pipe(babel({
			presets: ['@babel/preset-env']
		}))
		.pipe(concat("main.js"))
		.pipe(minify())
		.pipe(sourcemaps.write("."))
		.pipe(gulp.dest(dest + '/js'))
		.pipe(browserSync.stream())
})

gulp.task('concatJs', function () {
	return gulp.src([src + '/libs/js/swiper.min.js'])
		.pipe(sourcemaps.init())
		.pipe(concat('vendor.js'))
		.pipe(rename({
			suffix: '.min'
		}))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest(dest + '/libs/js'))
		.pipe(browserSync.stream())
});

gulp.task('concatCss', function () {
	return gulp.src(src + '/libs/css/*.css')
		.pipe(sourcemaps.init())
		.pipe(concat('vendor.css'))
		.pipe(csso())
		.pipe(rename({
			suffix: '.min'
		}))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest(dest + '/libs/css'))
		.pipe(browserSync.stream())
})

gulp.task('watch', function () {
	browserSync.init({
		server: {
			baseDir: dest
		},
		tunnel: false,
		host: 'localhost',
		port: 9000,
		logPrefix: "!!!"
	});
	gulp.watch(src + '/sass/**/*.sass', gulp.series('styles'));
	gulp.watch(src + '/libs/js/**/*.js', gulp.series('concatJs'));
	gulp.watch(src + '/libs/css/**/*.js', gulp.series('concatCss'));
	gulp.watch(src + '/**/*.pug', gulp.series('pug'));
	gulp.watch(src + '/js/**/*.js', gulp.series('js'));
	gulp.watch(src + '/img/**/*', gulp.series('images'))
})

gulp.task('default', gulp.series('concatCss', 'concatJs', 'watch'));