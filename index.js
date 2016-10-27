'use strict'

const array = require('cast-array')
const partial = require('ap').partial
const isObject = require('is-obj')
const hasOwn = Object.prototype.hasOwnProperty

module.exports = normalize

function normalize (prefixes, data) {
  prefixes = array(prefixes)

  if (arguments.length < 2) {
    return partial(normalize, prefixes)
  }

  return Object.keys(data).reduce(function (acc, key) {
    const value = data[key]

    if (hasOwn.call(acc, key)) {
      Object.assign(acc[key], value)
      return acc
    }

    const prefix = prefixes.find((prefix) => key.startsWith(prefix))

    if (!prefix) {
      return Object.assign(acc, {[key]: value})
    }

    const targetKey = key.slice(0, prefix.length - 1)

    if (hasOwn.call(data, targetKey)) {
      if (!isObject(data[targetKey])) {
        return Object.assign(acc, {[key]: value})
      }
    }

    if (!hasOwn.call(acc, targetKey)) {
      acc[targetKey] = {}
    }

    acc[targetKey][key.slice(prefix.length)] = value

    return acc
  }, {})
}
