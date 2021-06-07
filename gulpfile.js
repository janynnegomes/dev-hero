var gulp  = require('gulp'),
imagemin = require('gulp-imagemin'),
clean = require('gulp-clean'),
concat = require('gulp-concat'),
htmlReplace = require('gulp-html-replace');


// Limpa os arquivos da pasta final da build
gulp.task('clean', ()=>{
   return gulp.src('dist').
    pipe(clean());
});

// copia os arquivos a finais do projeto para a pasta dist
// mas antes, chama a clean pra limpar a pasta dist
gulp.task('copy', gulp.series('clean'), ()=>{
    return gulp.src('src/**/*').
        pipe(gulp.dest('dist')
    );
});

gulp.task('build-img', gulp.parallel('copy'), ()=>{
    return gulp.src('dist/assets/img/**/*').
     pipe(imagemin()).
     pipe(gulp.dest('dist/assets/img'));
 });

 gulp.task('build-js', ()=>{
     return gulp.src('dist/assets/js/**/*').
     pipe(concat('all.js')).
     pipe(gulp.dest('dist/assets/js'));
 });

 gulp.task('build-html', ()=>{
     return gulp.src('dist/**/*.html').
     pipe(htmlReplace({
         js: 'all.js'
     })).
     pipe(gulp.dest('dist'));
 });

 gulp.task('build-scss', gulp.parallel('copy'), ()=>{
    return gulp.src('dist/assets/img/**/*').
     pipe(imagemin()).
     pipe(gulp.dest('dist/assets/img'));
 });

 gulp.task('default',gulp.parallel('build-img','build-js','build-html'), (done)=>{
    done();   
});
