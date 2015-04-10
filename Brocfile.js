var concat = require('broccoli-concat'),
	pickFiles = require('broccoli-static-compiler'),
	mergeTrees = require('broccoli-merge-trees'),
	browserify = require('broccoli-browserify'),
	babelTranspiler = require('broccoli-babel-transpiler'),
	stylus = require('broccoli-stylus'),
	babelify = require('babelify');


var scripts, styles, vendor, public;


////////////////
// SCRIPTS
////////////////

scripts = babelTranspiler('app', {
	modules: 'umd'
});


////////////////
// STYLES
////////////////

styles = stylus('app/styles');


////////////////
// VENDOR
////////////////

vendor = pickFiles('vendor', {
	srcDir: '.',
	destDir: 'vendor'
});


////////////////
// PUBLIC
////////////////

public = pickFiles('public', {
	srcDir: '.',
	destDir: '.'
});


module.exports = mergeTrees([ scripts, styles, vendor, public ]);
