# gulp-concat-jsons

#### Convert list of json file in current stream to one JSON file.

Add it to your gulp file:

```js
gulp
  .src(['foo.json', 'bar.json'])
  .pipe(require('gulp-concat-jsons')('merged.json'))
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
$ npm install gulp-concat-jsons
```

## [MIT Licensed](LICENSE.md)
