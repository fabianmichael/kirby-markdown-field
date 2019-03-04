const { dest, src } = require('gulp');
const autoprefixer = require('gulp-autoprefixer');

function prefix() {
    return src('./index.css')
               .pipe(autoprefixer())
               .pipe(dest('./'));
}

exports.default = prefix;
