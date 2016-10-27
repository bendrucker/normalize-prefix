'use strict'

const test = require('tape')
const normalize = require('./')

test(function (t) {
  t.deepEqual(normalize('_', {foo: 'bar', baz: 'qux'}), {
    foo: 'bar',
    baz: 'qux'
  }, 'noop')

  t.deepEqual(normalize('foo_', {foo_id: 'bar'}), {
    foo: {
      id: 'bar'
    }
  }, 'simple')

  t.deepEqual(normalize(['foo_', 'bar_'], {foo_id: 'bar', bar_id: 'baz'}), {
    foo: {
      id: 'bar'
    },
    bar: {
      id: 'baz'
    }
  }, 'multiple')

  t.deepEqual(normalize('foo_')({foo_id: 'bar'}), {
    foo: {
      id: 'bar'
    }
  }, 'partial')

  t.deepEqual(normalize('foo_', {foo_id: 'bar', foo: {bar: 'baz'}}), {
    foo: {
      id: 'bar',
      bar: 'baz'
    }
  }, 'merge')

  t.deepEqual(normalize('foo_', {foo: {bar: 'baz'}, foo_id: 'bar'}), {
    foo: {
      id: 'bar',
      bar: 'baz'
    }
  }, 'merge reversed key order')

  t.deepEqual(normalize('foo_', {foo_id: 'bar', foo: 'baz'}), {
    foo_id: 'bar',
    foo: 'baz'
  }, 'skip')

  t.end()
})
