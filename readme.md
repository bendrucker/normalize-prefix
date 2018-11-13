# normalize-prefix [![Build Status](https://travis-ci.org/bendrucker/normalize-prefix.svg?branch=master)](https://travis-ci.org/bendrucker/normalize-prefix) [![Greenkeeper badge](https://badges.greenkeeper.io/bendrucker/normalize-prefix.svg)](https://greenkeeper.io/)

> Normalize an object based on a specified prefix


## Install

```
$ npm install --save normalize-prefix
```


## Usage

```js
var normalize = require('normalize-prefix')

normalize(['foo_', 'baz_'], {
  foo_id: 1,
  baz_id: 2,
  foo: {},
  baz: 3
})
//=> {foo: {id: 1}, baz_id: 2, baz: 3}
```

## API

#### `normalize(prefixes, data)` -> `object`

If only `prefixes` are supplied, a partially applied function will be returned instead.

##### prefixes

*Required*  
Type: `string / array[string]`

A punctuated prefix (e.g. `foo_`) or array of prefixes to use for normalization.

##### data

*Required*  
Type: `object`

The data to normalize.


## License

MIT © [Ben Drucker](http://bendrucker.me)
