# Chunk

# Installation

```
npm add https://github.com/wheel1992/chunk
```

# Usage

```js
const { chunk } = require('../dist/index');

const result = chunk(['a', 'b', 'c'], 1)

// Result is [['a'], ['b'], ['c']]

```

## Parameters

```ts
const chunk: <T>(collection: T[], size?: number) => T[][]
```

|Name|Mandatory?|Description|
|---|---|---|
|`collection`|Mandatory|Input array for splitting. Type is determined by the elements in the array.|
|`size`|Optional|The number of elements per child array in a 2D array. |