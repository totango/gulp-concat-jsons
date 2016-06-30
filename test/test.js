var fs = require('fs');
var path = require('path');
var gulp = require('gulp');
var gulpMergeJson = require('..');

describe('gulp-concat-jsons', function(done) {

	it('should output a json file with a list of the files content in the stream', function(done) {
		var src = 'test.json';
		var out = 'fileconcatjsons.json';
		var srcPath = path.join(__dirname, src);
		var filelistPath = path.join(__dirname, out);
		gulp
			.src('test/' + src)
			.pipe(gulpMergeJson(out))
			.pipe(gulp.dest('test'))
			.on('end', function(file) {
				var testJsonFile = require(srcPath);
				var filelist = require(filelistPath);
				filelist[0].should.eql(testJsonFile);
				fs.unlinkSync(filelistPath);
				done();
			});

	});
});
