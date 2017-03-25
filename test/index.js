/**
 * Imports
 */

var flatMap = require('..')
var test = require('tape')

/**
 * Tests
 */

test('should work', function (t) {
  t.deepEqual(flatMap(n => n + 1, [[1], [[[2]]], [[[3, 4], 5]]]), [2, 3, 4, 5, 6])
  t.deepEqual(flatMap(n => n + 1, [1]), [2])
  t.end()
})
