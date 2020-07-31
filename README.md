[![Build Status](https://travis-ci.org/MichaelQQ/dbfstream.svg)](https://travis-ci.org/MichaelQQ/dbfstream) [![Build status](https://ci.appveyor.com/api/projects/status/pxu5c6xyhinjc6d3?svg=true)](https://ci.appveyor.com/project/MichaelQQ/dbfstream)
[![npm version](https://badge.fury.io/js/dbfstream.svg)](https://badge.fury.io/js/dbfstream)
[![NPM Downloads](https://img.shields.io/npm/dt/dbfstream.svg)](https://www.npmjs.com/package/dbfstream)

deepOmit
===
deep omit function base on ramda.js

# Usage

deepOmit :: [String] -> Any -> Any

```js
const deepOmit = require('deepOmit');

const objectKeyToBeOmit = ['key1', 'key2']
const srcObject = {
  key1: 1,
  key2: 2,
  key3: 3
}
deepOmit(objectKeyToBeOmit, srcObject)
// { key3: 3 } 

const objectKeyToBeOmit = ['key1', 'key2']
const srcObjectArray = [{
  key1: 1,
  key2: 2,
  key3: 3
}, {
  key1: 1,
  key3: 3
}]
deepOmit(objectKeyToBeOmit, srcObject)
// [{ key3: 3 }, { key3: 3 }]
```
