var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var header = require('gulp-header');
var cleanCSS = require('gulp-clean-css');
var rename = require("gulp-rename");
var uglify = require('gulp-uglify');
var pkg = require('./package.json');
var stylus = require('gulp-stylus');

// Set the banner content
var banner = ['/*!\n',
    ' * LibreClass CE Landingpage - v<%= pkg.version %>\n',
    ' * Licensed under <%= pkg.license %>\n',
    ' */\n',
    ''
].join('');

gulp.task('stylus', function () {
  return gulp.src('css/main.styl')
    .pipe(stylus())
    .pipe(header(banner, { pkg: pkg }))
    .pipe(cleanCSS({ compatibility: 'ie8' }))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('css'))
    .pipe(browserSync.reload({
        stream: true
    }));
});

// Minify JS
gulp.task('minify-js', function() {
    return gulp.src('js/main.js')
        .pipe(uglify())
        .pipe(header(banner, { pkg: pkg }))
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('js'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

// Copy vendor libraries from /node_modules into /vendor
gulp.task('copy', function() {
    gulp.src(['node_modules/bootstrap/dist/**/*', '!**/npm.js', '!**/bootstrap-theme.*', '!**/*.map'])
        .pipe(gulp.dest('vendor/bootstrap'));

    gulp.src(['node_modules/jquery/dist/jquery.js', 'node_modules/jquery/dist/jquery.min.js'])
        .pipe(gulp.dest('vendor/jquery'));

    gulp.src([
            'node_modules/font-awesome/**',
            '!node_modules/font-awesome/**/*.map',
            '!node_modules/font-awesome/.npmignore',
            '!node_modules/font-awesome/*.txt',
            '!node_modules/font-awesome/*.md',
            '!node_modules/font-awesome/*.json'
        ])
        .pipe(gulp.dest('vendor/font-awesome'));
})

// Configure the browserSync task
gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: ''
        },
    });
});

// Dev task with browserSync
gulp.task('dev', ['browserSync', 'stylus', 'minify-js', 'copy'], function() {
    gulp.watch('css/*.styl', ['stylus']);
    gulp.watch('css/**/*.styl', browserSync.reload);
    gulp.watch('js/*.js', ['minify-js']);
    gulp.watch('js/**/*.js', browserSync.reload);
    gulp.watch('*.html', browserSync.reload);
});

gulp.task('default', ['stylus', 'minify-js', 'copy']);
// gulp.task('default', ['dev']);