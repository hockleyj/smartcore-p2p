'use strict';

var gulp = require('gulp');
var smartcoreTasks = require('smartcore-build');

smartcoreTasks('p2p', {skipBrowser: true});

gulp.task('default', ['lint', 'coverage']);
