/**
 * Modules
 */

var isArray = require('@f/is-array')

/**
 * Expose flatMap
 */

module.exports = flatMap

/**
 * flatMap
 */

function flatMap (fn, arr) {
  return flatMapInternal(fn, arr, [])
}

function flatMapInternal (fn, arr, acc) {
  for (var i = 0; i < arr.length; i++) {
    var item = arr[i]

    if (Array.isArray(item)) {
      flatMapInternal(fn, item, acc)
    } else {
      acc.push(fn(item))
    }
  }

  return acc
}
