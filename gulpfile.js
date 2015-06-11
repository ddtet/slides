var gulp = require('gulp')
  , shell = require('gulp-shell')
  , clean = require('gulp-clean')
  ;

gulp.task('default', function() {
  console.log("Run default");
});

gulp.task('build', function() {
  return gulp.src('src/**/*.adoc')
    .pipe(shell(
      ['asciidoctor -T dist/asciidoctor-reveal.js/templates/slim/ -o <%= tp(file.path) %> <%= file.path %>'],
      {
        templateData:
          {
            tp: function (path) { return path.replace('/src/', '/dist/').replace('.adoc', '.html'); }
          }
      }));
});

gulp.task('default', function () {
  console.log("Run default");
});

gulp.task('clean', function () {
  return gulp.src(['./dist/**/*.html'], {read: false})
    .pipe(clean());
});
gulp.task('remove_temp', function () {
  return gulp.src(['**/*~', '**/.*.swp', '**/.*un~'], {read: false})
    .pipe(clean());
});
