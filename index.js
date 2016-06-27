'use strict';
var pkg = require('./package');
var gutil = require('gulp-util');
var through = require('through2');
var path = require('path');
var File = require('vinyl');

// consts
module.exports = function(out, options) {

  options = options || {};

  var jsonList = [];

  return through.obj(function(file, enc, cb) {
    if (file.isNull()) {
      cb(null, file);
      return;
    }

    if (file.isStream()) {
      cb(new gutil.PluginError(pkg.name, 'Streams not supported'));
      return;
    }

    jsonList.push(JSON.parse(String(file.contents)));
    console.log('file.contents', JSON.parse(String(file.contents)));

    this.push(file);
    cb();
  }, function(cb) {
    console.log('jsonList', jsonList);
    var fileListFile = new File({
      path: out,
      contents: new Buffer(JSON.stringify(jsonList, null, '  '))
    });

    this.push(fileListFile);
    cb();
  });
};
