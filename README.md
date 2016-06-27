# gulp-merge-json

#### Convert list of json file in current stream to one JSON file.

Add it to your gulp file:

```js
gulp
  .src(['foo.json', 'bar.json'])
  .pipe(require('gulp-merge-json')('merged.json'))
  .pipe(gulp.dest('out'))
```

Outputs `out/merged.json`:

```json
[
  {...} // "foo.json content",
  {...} // "bar.json content"
]
```

## Installation

```bash
$ npm install gulp-merge-json
```

## [MIT Licensed](LICENSE)
