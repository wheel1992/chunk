const { chunk } = require('../dist/index');

(async () => {
  const result = chunk(['a', 'b', 'c'], 1)
  console.log(result)
})()