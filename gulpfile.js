var gulp = require('gulp'),
    plugins = require('gulp-load-plugins')(),
    del = require('del'),
    pkg = require('./package'),
    path = {
        dev: {
            less: 'src/less/**/*',
            js: 'src/js/**/*',
            hbs: 'src/partials/**/*',
            images: 'src/images/**/*',
            fonts: 'src/fonts/**/*'
        },
        dist: {
            css: 'dist/libs/gsearch/css',
            js: 'dist/libs/gsearch/js',
            hbs: 'dist/partials',
            images: 'dist/libs/gsearch/images',
            fonts: 'dist/libs/gsearch/fonts',
            libs: 'dist/libs'
        },
        libs: 'libs/**/*'
    };


// styles
gulp.task('styles', function () {
    gulp.src(path.dev.less)
        .pipe(plugins.replace('@VERSION', pkg.version))
        .pipe(plugins.less({preserveComments: 'license'}))
        .pipe(gulp.dest(path.dist.css))
        .pipe(plugins.autoprefixer())
        .pipe(plugins.cleanCss())
        .pipe(plugins.rename({suffix: '.min'}))
        .pipe(gulp.dest(path.dist.css));
});

// scripts
gulp.task('scripts', function () {
    gulp.src(path.dev.js)
        .pipe(plugins.replace('@VERSION', pkg.version))
        .pipe(gulp.dest(path.dist.js))
        .pipe(plugins.uglify({preserveComments: 'license'}))
        .pipe(plugins.rename({suffix: '.min'}))
        .pipe(gulp.dest(path.dist.js));

});


// others
gulp.task('others', function () {
    gulp.src(path.dev.images).pipe(gulp.dest(path.dist.images));
    gulp.src(path.dev.fonts).pipe(gulp.dest(path.dist.fonts));
    gulp.src(path.dev.hbs).pipe(gulp.dest(path.dist.hbs));
    gulp.src(path.libs).pipe(gulp.dest(path.dist.libs));
});

// watch
gulp.task('watch', function () {
    gulp.watch(path.dev.less, ['styles']);
    gulp.watch(path.dev.js, ['scripts']);
    gulp.watch([path.dev.hbs, path.dev.images, path.dev.fonts, path.libs], ['others']);
});

// clean
gulp.task('clean', function () {
    return del('dist');
});

// build
gulp.task('build', function (cb) {
    plugins.sequence('clean', ['styles', 'scripts', 'others'], cb);

});

// default
gulp.task('default', function (cb) {
    plugins.sequence('build', 'watch', cb);
});