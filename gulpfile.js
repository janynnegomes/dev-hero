const { series, parallel, src, dest, watch } = require('gulp');
const clean = require('gulp-clean');
const concat = require('gulp-concat');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const usemin = require('gulp-usemin');
const browserSync = require('browser-sync');
const sass = require('gulp-sass');
const htmlmin = require('gulp-htmlmin');

sass.compiler = require('node-sass');

// limpa a pasta de distribuição para receber novos arquivos
function clear(done) {
    return src('dist',{ allowEmpty: true }).
    pipe(clean());
}

// copia os arquivos originais para a pasta de distribuição
function copy(done) {
    const origin = 'src/**/*';
    const targetFolder= 'dist';
    console.log('copiando arquivos ...');
    return src(origin).
        pipe(dest(targetFolder));
}

// concatena os scripts js em apenas um arquivo final
function javascript(done) {
    return src('dist/assets/js/**/*').
     pipe(concat('all.js')).
     pipe(uglify()).
     pipe(dest('dist/assets/js'));
}

// Concatena os arquivos de estilo em um arquivo final
function buildCss(done) {
    return src(['node_modules/bootstrap/dist/css/bootstrap.min.css',
                'dist/assets/css/**/*.css']).
     pipe(concat('all.css')).
     pipe(dest('dist/assets/css'));
}

// Realiza otimização das imagens e salva na pasta de distribuição
function buildImages (done){
    console.log('Otimizando imagens');
    return src('dist/assets/img/**/*').
     pipe(imagemin()).
     pipe(dest('dist/assets/img'));
 }

 function minify() {
    return src('./*.html')
      .pipe(usemin({
        html: [ function () {return htmlmin({ collapseWhitespace: true });} ],
        js: [ uglify ],
        inlinejs: [ uglify ]
      }))
      .pipe(dest('build/'));
    }

function serve(done){
    browserSync.init({
        server:{
            baseDir:'src'
        }
    })
    
    watch('src/**/*').on('change', browserSync.reload);    
}

function sassRun () {
    return src('src/assets/scss/**/*.scss')
      .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
      .pipe(dest('src/assets/css'));
}
   
function sassWatch() {
    return watch('src/assets/scss/**/*.scss', series(sassRun));
}

exports.serve = serve;
exports.sass = sassRun;
exports.sassWatch = sassWatch;
exports.minify = minify;
exports.build = series(clear, sassRun, copy, parallel(buildImages, buildCss, minify));