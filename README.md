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
